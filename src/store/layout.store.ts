import { create } from 'zustand';

interface SidebarState {
    isMobileOpen: boolean;
    isDesktopOpen: boolean;
    toggleMobile: () => void;
    toggleDesktop: () => void;
    closeMobile: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
    isMobileOpen: false,
    isDesktopOpen: true,
    toggleMobile: () => set((state) => ({ isMobileOpen: !state.isMobileOpen })),
    toggleDesktop: () => set((state) => ({ isDesktopOpen: !state.isDesktopOpen })),
    closeMobile: () => set({ isMobileOpen: false }),
}));