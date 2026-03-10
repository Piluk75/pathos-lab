import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import initialContent from '../_data/content.json';

interface ContentContextType {
    content: any;
    portfolio: any[];
    loading: boolean;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [content, setContent] = useState<any>(initialContent);
    const [portfolio, setPortfolio] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch Content
                const { data: contentData, error: contentError } = await supabase
                    .from('site_content')
                    .select('data')
                    .eq('id', 1)
                    .single();

                if (!contentError && contentData) {
                    setContent(contentData.data);
                }

                // Fetch Portfolio
                const { data: portfolioData, error: portfolioError } = await supabase
                    .from('portfolio')
                    .select('*')
                    .order('order', { ascending: true });

                if (!portfolioError && portfolioData) {
                    setPortfolio(portfolioData);
                }

                setLoading(false);
            } catch (err) {
                console.error('Error fetching data from Supabase:', err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <ContentContext.Provider value={{ content, portfolio, loading }}>
            {children}
        </ContentContext.Provider>
    );
};

export const useContent = () => {
    const context = useContext(ContentContext);
    if (context === undefined) {
        throw new Error('useContent must be used within a ContentProvider');
    }
    return context;
};
