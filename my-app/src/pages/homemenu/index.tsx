import { Tabs } from "antd";
import { useState } from "react";

type TabPosition = "left" | "right" | "top" | "bottom";

const HomeMenu = () => {
  const [tabPosition] = useState<TabPosition>("left");

  return (
    <div>
      <>
        <Tabs
          tabPosition={tabPosition}
          items={Array.from({ length: 3 }).map((_, i) => {
            const id = String(i + 1);
            return {
              label: (
                <img
                  src="https://picsum.photos/200"
                  alt={`menu ${id}`}
                  className="rounded-full"
                  width={50}
                />
              ),
              key: id,
              children: `Content of Tab ${id}`,
            };
          })}
        />
      </>
    </div>
  );
};

export default HomeMenu;
