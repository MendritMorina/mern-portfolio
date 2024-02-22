import AdminIntro from "./AdminIntro";
import Header from "../../components/Header";
import { Tabs } from "antd";
import AdminAbout from "./AdminAbout";
import AdminExperience from "./AdminExperience";
import AdminProject from "./AdminProject";
import AdminContact from "./AdminContact";

const Admin = () => {
  const tabItems = [
    {
      label: "Intro",
      key: "1",
      children: <AdminIntro />,
    },
    {
      label: "About",
      key: "2",
      children: <AdminAbout />,
    },
    {
      label: "Experiences",
      key: "3",
      children: <AdminExperience />,
    },
    {
      label: "Projects",
      key: "4",
      children: <AdminProject />,
    },
    {
      label: "Contacts",
      key: "5",
      children: <AdminContact />,
    },
  ];

  return (
    <div>
      <Header />
      <div className="mt-5 p-5">
        <Tabs defaultActiveKey="1" items={tabItems} />
      </div>
    </div>
  );
};

export default Admin;
