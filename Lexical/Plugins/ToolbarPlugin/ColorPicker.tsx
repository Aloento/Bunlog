import { ColorPicker, getColorFromString } from "@fluentui/react";
import { Popover, PopoverSurface, PopoverTrigger, ToolbarButton } from "@fluentui/react-components";
import { useState } from "react";

interface IColorPicker {
  disabled: boolean;
  ariaLabel: string;
  color: string;
  onChange: (hex: string) => void;
  icon: JSX.Element;
}

export function LexColorPicker({ disabled, ariaLabel, color: input, onChange, icon }: IColorPicker) {
  const [color, setColor] = useState(getColorFromString(input) || getColorFromString("#000")!);

  return (
    <Popover trapFocus withArrow>
      <PopoverTrigger>
        <ToolbarButton
          disabled={disabled}
          icon={icon}
          title={ariaLabel}
          aria-label={ariaLabel}
        />
      </PopoverTrigger>

      <PopoverSurface>
        <ColorPicker
          color={color}
          alphaType="none"
          showPreview
          onChange={(_, color) => {
            setColor(color);
            onChange(color.str);
          }}
        />
      </PopoverSurface>
    </Popover>
  );
}
