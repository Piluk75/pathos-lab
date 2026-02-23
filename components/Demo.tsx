import React from 'react';
import Navbar from './Navbar';

const Demo: React.FC = () => {
  return (
    <div className="bg-pathos-bg min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="w-full h-[calc(100vh-80px)]">
          <iframe 
            src="https://app.relevanceai.com/agents/d7b62b/7bf0f118-3c3a-40fb-a7e6-3b4ccaaad5ca/bc8b5c92-532f-49e9-99ff-3d286150b49c/embed-chat?hide_tool_steps=true&hide_file_uploads=true&hide_conversation_list=true&bubble_style=agent&primary_color=%232557cb&bubble_icon=pd%2Fchat&input_placeholder_text=Escribe+tu+consulta+para+probar+la+DEMO&hide_logo=true&hide_description=true" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            allow="microphone"
            title="Pathos AI Demo"
          ></iframe>
        </div>
      </main>
    </div>
  );
};

export default Demo;
