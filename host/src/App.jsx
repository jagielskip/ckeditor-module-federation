import RemoteHtmlEditorCE from "remoteApp/HtmlEditorCustomElement";
import HostHtmlEditor from "./components/HostHtmlEditor";

customElements.define("html-editor", RemoteHtmlEditorCE);

function App() {
  return (
    <div>
      <h1>Host app</h1>
      This example show two CKEditor instances on a single page. One comes from
      the host, the other from the remote.
      <h2>Remote CKEditor as a custom element</h2>
      <html-editor />
      <h2>Host CKEditor</h2>
      <HostHtmlEditor />
    </div>
  );
}

export default App;
