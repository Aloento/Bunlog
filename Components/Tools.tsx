import { CurrentEditor } from "@/Lexical/Utils";
import { Flex } from "@/Styles/Layout";
import { Body1, Button, Card, CardHeader } from "@fluentui/react-components";
import { DeleteRegular, DocumentJavascriptRegular, DocumentPdfRegular, EditRegular } from "@fluentui/react-icons";
import { exportFile } from "@lexical/file";
import { Admin } from "./User";

export function Tools() {
  return (
    CurrentEditor &&
    <Card size="large">
      <CardHeader header={<Body1>TOOLS</Body1>} />

      <div style={{
        ...Flex,
        justifyContent: "space-around"
      }}>
        <Admin>
          <Button icon={<EditRegular />} appearance="subtle" />
          <Button icon={<DeleteRegular />} appearance="subtle" />
        </Admin>

        <Button icon={<DocumentPdfRegular />} appearance="subtle" />
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
