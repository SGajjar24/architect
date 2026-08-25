import React, { createContext, useContext, useState, useEffect } from 'react';

export type Render3DMode = 'solid' | 'wireframe' | 'xray';

interface StudioContextType {
  isBlueprintMode: boolean;
  toggleBlueprintMode: () => void;
  render3DMode: Render3DMode;
  setRender3DMode: (mode: Render3DMode) => void;
}

const StudioContext = createContext<StudioContextType | undefined>(undefined);

export const StudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isBlueprintMode, setIsBlueprintMode] = useState<boolean>(() => {
    return localStorage.getItem('vg_blueprint_mode') === 'true';
  });

  const [render3DMode, setRender3DMode] = useState<Render3DMode>('solid');

  const toggleBlueprintMode = () => {
    setIsBlueprintMode((prev) => {
      const next = !prev;
      localStorage.setItem('vg_blueprint_mode', String(next));
      return next;
    });
  };

  useEffect(() => {
    if (isBlueprintMode) {
      document.documentElement.classList.add('blueprint-theme');
    } else {
      document.documentElement.classList.remove('blueprint-theme');
    }
  }, [isBlueprintMode]);

  return (
    <StudioContext.Provider
      value={{
        isBlueprintMode,
        toggleBlueprintMode,
        render3DMode,
        setRender3DMode,
      }}
    >
      {children}
    </StudioContext.Provider>
  );
};

export const useStudio = (): StudioContextType => {
  const context = useContext(StudioContext);
  if (!context) {
    throw new Error('useStudio must be used within a StudioProvider');
  }
  return context;
};

export default StudioContext;
