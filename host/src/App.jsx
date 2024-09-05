import RemoteHtmlEditor from 'remoteApp/HtmlEditor';
import HostHtmlEditor from './components/HostHtmlEditor';

function App() {
  return (
    <div>
      <h1>Host app</h1>
      This example show two CKEditor instances on a single page. One comes from the host, the other from the remote.
      <h2>Remote CKEditor</h2>
      <RemoteHtmlEditor />
      <h2>Host CKEditor</h2>
      <HostHtmlEditor />
    </div>
  )
}

export default App
