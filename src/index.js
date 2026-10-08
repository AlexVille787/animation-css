import "./css/style.css";
import Collapsible from "./js/Collapsible";

const root = document.getElementById("root");

const text = `
  Anim pariatur cliche reprehenderit, enim eiusmod high life
  accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica,
  craft beer labore wes anderson cred nesciunt sapiente ea proident.
`;

// eslint-disable-next-line no-new
new Collapsible({ root, text });
