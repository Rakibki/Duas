import SettingsItem from "./settingsItem/SettingsItem";

const MainRight = () => {
  return (
    <div className="bg-white rounded-2xl p-4 min-h-screen">
      <h2 className="text-center font-semibold text-xl">Settings</h2>

      <div className="mt-3 flex flex-col gap-2">
        <SettingsItem
          text={"General Settings"}
          logo={"https://duaruqyah.com/assets/sidebar/general.svg"}
        />
        <SettingsItem
          text={"Language Settings"}
          logo={"https://duaruqyah.com/assets/sidebar/language.svg"}
        />
        <SettingsItem
          text={"Font Settings"}
          logo={"https://duaruqyah.com/assets/sidebar/color/font.svg"}
        />
      </div>
    </div>
  );
};

export default MainRight;
