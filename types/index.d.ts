declare module 'react-pagination-master' {
  export interface PaginationProps {
    arrDatas: any[]; countItems: number; countDataPerPage: number; pathName: string; onFilterDatas: (params: { showDatasInDOM: { [key: string]: any }[], activePage: number, isLoading: boolean }) => void; textActivePage?: string; isArrowsShow?: boolean; stickingBoxes?: boolean; activePage?: number; separateBox?: boolean; color?: string; bgColor?: string; colorActive?: string; bgColorActive?: string; directionPage?: 'ltr' | 'rtl';
  }
  const pagination: React.FC<PaginationProps>;
  export default pagination;
}