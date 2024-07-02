import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
      👩🏽‍💻 Meet Mary! 
      </h1>
      <ul>
        <li className="text-l">
          
          <span className="ml-2">
            A Super Grocery Money Saving Experts.
          </span>
        </li>
        <li className="hidden text-l md:block">
          
          <span className="ml-2">
           She will only answer related to saving you money on the top 3 grocery items. 
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/agents"
      emptyStateComponent={InfoCard}
      placeholder="Let's save that money!"
      titleText="Mary is here to save save save!"
      emoji="👩🏽‍💻"
      showIntermediateStepsToggle={false}
    ></ChatWindow>
  );
}
