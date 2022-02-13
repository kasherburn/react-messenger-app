import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/chat-feed';
import LoginForm from './components/login-form';

import './app.css';

const App = () => {
	if(!localStorage.getItem('username')) return <LoginForm/>
	
	return (
		<ChatEngine 
			height="100vh"
			projectID="77545447-4557-49cc-aeb6-6eddf0b772ac"
			userName="kellySherburn"
			userSecret="123"
			renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
		/>
	)
}

export default App;