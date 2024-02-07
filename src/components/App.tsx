import { Layout } from "antd";
import AppSider from "../layouts/AppSider";
import AppHeader from "../layouts/AppHeader";
import AppContent from "../layouts/AppContent";

export default function App() {
  return (
    <Layout className="overflow-hidden h-screen w-screen">
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  );
}
