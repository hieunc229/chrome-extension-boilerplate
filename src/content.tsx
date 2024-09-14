import "./styles.scss";
import App from ".";
import { Root, createRoot } from "react-dom/client";

const target = document.createElement("div");
target.id = "myExtensionId"
var root: Root;

function mout(target) {
  if (!root) {
    root = createRoot(target);
  }

  root.render(<App />);
}

document.body.appendChild(target);
mout(target);
