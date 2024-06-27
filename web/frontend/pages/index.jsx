import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { LoginPage } from "../components/loginPage";

export default function HomePage() {
  return (
    <Page narrowWidth>
      <TitleBar title={"Jeebly-app"} primaryAction={null} />
      <Layout>
        <Layout.Section>
        <LoginPage />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
