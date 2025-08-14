'use client';

import Conversation from "@/components/Chat/Conversation";
import InputField from "@/components/Chat/InputField";
import TypingEffectText from "@/components/TypeEffect";
import DefaultLayout from "@/layouts/Default";
import { ConversationItem } from "@/types/ChatBotTypes";
import { useState } from "react";

export default function Home() {

  const [conversation, setConversation] = useState<ConversationItem[]>([]);

  return (
    <DefaultLayout>
      <div
        className="flex flex-col justify-center h-full overflow-hidden"
      >
        {
          conversation.length === 0 &&
          <TypingEffectText
            text={"AI Art By Me"}
            className="text-3xl font-black text-center"
          />
        }

        {
          conversation.length > 0 &&
          <Conversation
            conversation={conversation}
          />
        }

        <InputField
          setConversation={setConversation}
        />
      </div>
    </DefaultLayout>
  );
}
