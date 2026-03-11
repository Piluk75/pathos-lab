import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
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
            if (!isSupabaseConfigured) {
                setLoading(false);
                return;
            }
            try {
                // Fetch Content (Use parallel fetch if available)
                const fetchPromise = (window as any).__PATHOS_CONTENT_FETCH__;
                let contentData;

                if (fetchPromise) {
                    const result = await fetchPromise;
                    contentData = Array.isArray(result) ? result[0] : result;
                } else {
                    const { data } = await supabase
                        .from('site_content')
                        .select('data')
                        .eq('id', 1)
                        .single();
                    contentData = data;
                }

                if (contentData && contentData.data) {
                    setContent(contentData.data);
                }

                // Fetch Portfolio (Use parallel fetch if available)
                const portfolioPromise = (window as any).__PATHOS_PORTFOLIO_FETCH__;
                let portfolioData;

                if (portfolioPromise) {
                    portfolioData = await portfolioPromise;
                } else {
                    const { data } = await supabase
                        .from('portfolio')
                        .select('*')
                        .order('order', { ascending: true });
                    portfolioData = data;
                }

                if (portfolioData) {
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
