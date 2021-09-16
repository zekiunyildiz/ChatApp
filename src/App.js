import {ChatEngine} from 'react-chat-engine';

import './App.css';

import ChatFeed from './components/ChatFeed'

const App = () => {
    return (
        <ChatEngine
        
            height="100vh"
            projectID="1c4bf031-906c-452e-b048-a952b836d8c7"
            userName="zekiunyildiz"
            userSecret="Nisa_1997"

            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        
        />
    );
}

export default App;