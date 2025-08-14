'use client';

import Conversation from "@/components/Chat/Conversation";
import InputField from "@/components/Chat/InputField";
import DefaultLayout from "@/layouts/Default";
import { ConversationItem } from "@/types/ChatBotTypes";
import { useState } from "react";

export default function Home() {

  const [conversation, setConversation] = useState<ConversationItem[]>([]);

  return (
    <DefaultLayout>
      <div
        className="flex flex-col h-full overflow-hidden"
      >
        <Conversation
          conversation={conversation}
        />
        <InputField
          setConversation={setConversation}
        />
      </div>
    </DefaultLayout>
  );
}
