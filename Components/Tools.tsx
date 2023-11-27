import { CurrentEditor } from "@/Lexical/Utils";
import { Flex } from "@/Styles/Layout";
import { Body1, Button, Card, CardHeader, Link } from "@fluentui/react-components";
import { DeleteRegular, DocumentJavascriptRegular, DocumentPdfRegular, EditRegular } from "@fluentui/react-icons";
import { exportFile } from "@lexical/file";
import { useRouter } from "next/navigation";
import { Admin } from "./User";

export function Tools() {
  const { push } = useRouter();
  const id = typeof document !== "undefined" ? location.pathname.split("/").reverse()[0] : "";

  return (
    CurrentEditor &&
    <Card size="large">
      <CardHeader header={<Body1>TOOLS</Body1>} />

      <div style={{
        ...Flex,
        justifyContent: "space-around"
      }}>
        <Admin>
          <Link appearance="subtle" href={`/Post/${id}`}>
            <Button icon={<EditRegular />} appearance="subtle" />
          </Link>

          <Button icon={<DeleteRegular />} appearance="subtle" onClick={async () => {
            await fetch(`/api/Article/${id}`, {
              method: "DELETE"
            });

            push("/");
          }} />
        </Admin>

        <Button icon={<DocumentPdfRegular />} appearance="subtle" onClick={() => {
          var s = new XMLSerializer();
          var html = s.serializeToString(document.querySelector(".LexEditor_Shell")!);

          const a = document.createElement('a');
          const body = document.body;
          body.appendChild(a);
          a.style.display = 'none';

          const url = window.URL.createObjectURL(
            new Blob(
              [JSON.stringify(html)], {
              type: 'octet/stream'
            })
          );

          a.href = url;
          a.download = `Bunlog ${new Date().toISOString()}.html`;
          a.click();
          window.URL.revokeObjectURL(url);
          a.remove();
        }} />

        <Button icon={<DocumentJavascriptRegular />} appearance="subtle" onClick={() => {
          exportFile(CurrentEditor!, {
            fileName: `Bunlog ${new Date().toISOString()}`,
            source: "Bunlog",
          })
        }} />
      </div>
    </Card>
  )!;
}
