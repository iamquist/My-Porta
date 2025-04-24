"use client";
import React, { useState, useRef, useEffect } from "react";
import Select, { Props, components } from "react-select";


const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[16px]",
} as const;
const variants = {
  fill: {
    gray_100: "bg-gray-100 text-gray-900_01",
    blue_gray_50: "bg-blue-gray-50 text-gray-900_01",
    white_A700: "bg-white-a700 text-gray-900_01",
    indigo_A200: "bg-indigo-a200 text-white-a700",
  },
  outline: {
    gray_100: "border-gray-100 border-[0.5px] border-solid text-gray-900_01",
  },
} as const;
const sizes = {
  xs: "h-[30px] px-2.5 text-[12px]",
  sm: "h-[34px] px-2.5 text-[24px]",
  lg: "h-[36px] pl-4",
  md: "h-[34px] px-2.5 text-[14px]",
} as const;

type VariantColorMap = {
  [K in keyof typeof variants]: keyof typeof variants[K];
};

type SubMenuItemType = React.ReactNode;

type selectOptionType = { 
  content: React.ReactElement<HTMLDivElement> & {
    props: {
      className?: string;
      children?: React.ReactNode;
    };
  };
  subMenu?: SubMenuItemType;
};

type SelectProps = Omit<Props, "getOptionLabel"> & 
  Partial<{
    className: string;
    options: selectOptionType[];
    isSearchable: boolean;
    isMulti: boolean;
    onChange: (option: any) => void;
    value: string;
    indicator: React.ReactElement;
    getOptionLabel: (e: any) => string;
    children: React.ReactNode;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: VariantColorMap[keyof VariantColorMap];
  }>;

// Global SubMenu Portal
const GlobalSubMenuPortal: React.FC = () => {
  const [subMenuContent, setSubMenuContent] = useState<React.ReactNode>(null);
  const [position, setPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const subMenuRef = useRef<HTMLDivElement>(null);
  const mouseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isMouseInSubMenu = useRef(false);
  const isMouseInOptionWithSubMenu = useRef(false);
  const lastHoveredOptionRef = useRef<number | null>(null);

  useEffect(() => {
    const handleSubMenuEvent = (e: CustomEvent<{ 
      content: React.ReactNode; 
      position: { top: number; left: number };
      optionIndex?: number;
    }>) => {
      setSubMenuContent(e.detail.content);
      setPosition(e.detail.position);
      if (e.detail.optionIndex !== undefined) {
        lastHoveredOptionRef.current = e.detail.optionIndex;
      }
    };

    const clearSubMenuEvent = () => {
      setSubMenuContent(null);
      lastHoveredOptionRef.current = null;
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        subMenuRef.current && 
        !subMenuRef.current.contains(event.target as Node)
      ) {
        setSubMenuContent(null);
        lastHoveredOptionRef.current = null;
      }
    };

    window.addEventListener('show-submenu' as any, handleSubMenuEvent);
    window.addEventListener('clear-submenu' as any, clearSubMenuEvent);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('show-submenu' as any, handleSubMenuEvent);
      window.removeEventListener('clear-submenu' as any, clearSubMenuEvent);
      document.removeEventListener('mousedown', handleClickOutside);
      if (mouseTimeoutRef.current) {
        clearTimeout(mouseTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseLeaveSubMenu = () => {
    isMouseInSubMenu.current = false;
    checkShouldCloseMenu();
  };

  const handleMouseEnterSubMenu = () => {
    isMouseInSubMenu.current = true;
    if (mouseTimeoutRef.current) {
      clearTimeout(mouseTimeoutRef.current);
    }
  };

  const checkShouldCloseMenu = () => {
    if (!isMouseInSubMenu.current && !isMouseInOptionWithSubMenu.current) {
      mouseTimeoutRef.current = setTimeout(() => {
        if (!isMouseInSubMenu.current && !isMouseInOptionWithSubMenu.current) {
          window.dispatchEvent(new CustomEvent('clear-submenu'));
        }
      }, 150); 
    }
  };

  if (!subMenuContent) return null;

  return (
    <div 
      ref={subMenuRef}
      className="fixed z-[1] ml-3 bg-white border border-gray-300 rounded-md shadow-md p-2"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        opacity: 1,
        pointerEvents: 'auto',
        backdropFilter: 'blur(0px)',
        backgroundColor: 'rgba(255, 255, 255, 1)',
      }}
      onMouseLeave={handleMouseLeaveSubMenu}
      onMouseEnter={handleMouseEnterSubMenu}
    >
      {subMenuContent}
    </div>
  );
};

const SelectBox = React.forwardRef<any, SelectProps>(
  (
    {
      children,
      className = "",
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      shape,
      variant = "fill",
      size = "md",
      color = "gray_100",
      ...restProps
    },
    ref,
  ) => {
    const [menuPortalTarget, setMenuPortalTarget] = useState<HTMLElement | null>(null);
    const optionRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
    const isMouseInOptionWithSubMenu = useRef(false);
    const mouseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    React.useEffect(() => {
      setMenuPortalTarget(document.body);
    }, []);

    const CustomOption = ({ innerProps, data, index }: any) => {
      const optionData = data as selectOptionType;
      
      const handleMouseEnter = (e: React.MouseEvent) => {
        if (optionData.subMenu) {
          isMouseInOptionWithSubMenu.current = true;
          if (mouseTimeoutRef.current) {
            clearTimeout(mouseTimeoutRef.current);
          }
          const rect = e.currentTarget.getBoundingClientRect();
          window.dispatchEvent(new CustomEvent('show-submenu', {
            detail: {
              content: optionData.subMenu,
              position: {
                top: rect.top,
                left: rect.right
              },
              optionIndex: index
            }
          }));
        }
      };
      
      const handleMouseLeave = () => {
        if (optionData.subMenu) {
          isMouseInOptionWithSubMenu.current = false;
          mouseTimeoutRef.current = setTimeout(() => {
            if (!isMouseInOptionWithSubMenu.current) {
              window.dispatchEvent(new CustomEvent('clear-submenu'));
            }
          }, 150); // Match the delay in GlobalSubMenuPortal
        }
      };

      return (
        <div 
          {...innerProps}
          ref={(el) => optionRefs.current[index] = el}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={optionData.subMenu ? handleMouseLeave : undefined}
          className="relative"
        >
          {optionData.content}
        </div>
      );
    };

    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className} flex ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color as keyof typeof variants[typeof variant]]}`}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
            Option: CustomOption
          }}
          styles={{
            indicatorsContainer: (provided) => ({
              ...provided,
              padding: undefined,
              flexShrink: undefined,
              width: "max-content",
              "& > div": { padding: 0 },
            }),
            container: (provided) => ({
              ...provided,
              zIndex: 0,
              alignItems: "center",
              "&:hover": {
                transform: "scale(1.08)",
                // Target all child elements when container is hovered
                "& *": {  // This targets any child element
                  fontWeight: "bold",
                  color: "black" // Equivalent to font-bold in Tailwind
                }
              }
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "none !important",
              minHeight: "auto",
              width: "100%",
              flexWrap: undefined,
              "&:hover": {
                border: "0 !important",
              },
            }),
            input: (provided) => ({
              ...provided,
              color: "inherit",
            }),
            option: (provided, state) => ({
              ...provided,
              display: "flex",
              minWidth: "max-content",
              width: "100%",
              backgroundColor: state.isSelected ? "#f5f2fd" : "transparent",
              color: state.isSelected ? "#7f55e0" : "inherit",
              "&:hover": {
                backgroundColor: "#f5f2fd",
                color: "#7f55e0",
              },
            }),
            singleValue: (provided) => ({
              ...provided,
              display: "flex",
              marginLeft: undefined,
              marginRight: undefined,
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: 0,
              display: "flex",
              flexWrap: undefined,
            }),
            placeholder: (provided) => ({
              ...provided,
              margin: 0,
              fontWeight: 'normal',
              transition: 'font-weight 0.2s ease',
            }),
            menuPortal: (base) => ({ 
              ...base, 
              zIndex: 999999,
              backgroundColor: 'white',
              opacity: 1
            }),
            menu: (base) => ({ 
              ...base, 
              minWidth: "max-content", 
              width: "max-content",
              backgroundColor: 'white',
              justifyItems: 'center',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
              paddingLeft: '0.5rem',
              paddingRight: '0.5rem',
              marginLeft: '0.5rem',
              marginTop: '1rem',
              opacity: 1,
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              borderWidth: '1px',              // border (equivalent to border in Tailwind)
              borderStyle: 'dashed',          // border-dashed
              borderColor: '#1d4ed8',         // border-blue-700 (#1d4ed8 is the hex for blue-700)
            }),
          }}
          menuPortalTarget={menuPortalTarget}
          closeMenuOnScroll={(event: any) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
        {children}
        <GlobalSubMenuPortal />
      </>
    );
  },
);

export { SelectBox, type selectOptionType, type SubMenuItemType };
