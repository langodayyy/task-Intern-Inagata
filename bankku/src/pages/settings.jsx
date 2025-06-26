import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import EditProfile from "../components/ui/editProfil";
import {Preferences}  from "../components/ui/preferences";
import {Security} from "../components/ui/security";

function Settings() {
  return (
    <>
      <div className="w-full bg-white rounded-[25px] md:px-[30px] md:py-[37px] p-[20px]">
        <Tabs defaultValue="editProfile">
              <div className="inline-flex items-center justify-start border-b-2 border-[#F4F5F7] w-full ">

          <TabsList>
            <div className="flex md:gap-5 gap-0">
              <TabsTrigger
                value="editProfile"
                variant={"underline"}
                >
                Edit Profile
              </TabsTrigger>
              <TabsTrigger value="preferences" variant={"underline"}>
                Preferences
              </TabsTrigger>
              <TabsTrigger value="security" variant={"underline"}>
                Security
              </TabsTrigger>
            </div>
          </TabsList>
                </div>
          <TabsContent value="editProfile">
            <EditProfile></EditProfile>
          </TabsContent>
          <TabsContent value="preferences">
           <Preferences></Preferences>
          </TabsContent>
          <TabsContent value="security">
           <Security></Security>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

export default Settings;
