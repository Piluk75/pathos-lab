import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function updateHero() {
    const { data: current, error: getError } = await supabase
        .from('site_content')
        .select('data')
        .eq('id', 1)
        .single();

    if (getError) {
        console.error('Error getting current content:', getError);
        return;
    }

    const newData = {
        ...current.data,
        hero: {
            ...current.data.hero,
            title_part1: "Diseño Web que",
            title_part2: "conecta,",
            title_part3: "",
            title_part4: "automatización que",
            title_part5: "escala"
        }
    };

    const { error: updError } = await supabase
        .from('site_content')
        .upsert({ id: 1, data: newData });

    if (updError) {
        console.error('Error updating hero:', updError);
    } else {
        console.log('Hero updated successfully in Supabase');
    }
}

updateHero();
