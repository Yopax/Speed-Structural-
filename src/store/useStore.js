import {create} from 'zustand';

const useStore = create((set, get) => ({
  columns: 0,
  rows: 0,
  columnGap: 0,
  rowGap: 0,
  columnSizes: [],
  rowSizes: [],
  setColumns: (columns) =>
    set({ columns, columnSizes: Array(columns).fill("1fr") }),
  setRows: (rows) => set({ rows, rowSizes: Array(rows).fill("1fr") }),
  setColumnGap: (columnGap) => set({ columnGap }),
  setRowGap: (rowGap) => set({ rowGap }),
  setColumnSize: (index, size) =>
    set((state) => {
      const newColumnSizes = [...state.columnSizes];
      newColumnSizes[index] = `${size}fr`;
      return { columnSizes: newColumnSizes };
    }),
  setRowSize: (index, size) =>
    set((state) => {
      const newRowSizes = [...state.rowSizes];
      newRowSizes[index] = `${size}fr`;
      return { rowSizes: newRowSizes };
    }),
  getMaxRowSize: () => {
    const rowSizes = get().rowSizes;
    return rowSizes.length ? Math.max(...rowSizes.map(size => parseFloat(size))) : 0;
  },

  getMaxColumnSize: () => {
    const columnSizes = get().columnSizes;
    return columnSizes.length ? Math.max(...columnSizes.map(size => parseFloat(size))) : 0;
  },


  getTotalColumnSizes: (state) =>
    state.columnSizes.reduce((sum, size) => sum + parseFloat(size), 0),
  getTotalRowSizes: (state) =>
    state.rowSizes.reduce((sum, size) => sum + parseFloat(size), 0),
  losa: 0,
  lng: 0,
  setLosa: (value) => set({ losa: value }),
  setLng: (lng) => set({ lng }),

  losa2: 0,
  setLosa2: (value) => set({ losa2: value }),

  losa1: 0,
  setLosa1: (value) => set({ losa1: value }),

  dimx: 0,
  dimy: 0,
  setDimx: (dimx) => set({ dimx }),
  setDimy: (dimy) => set({ dimy }),

  // vigas
  vx: 0,
  vy: 0,
  setVx: (vx) => set({ vx }),
  setVy: (vy) => set({ vy }),

  pdd: 0,
  setPdd: (pdd) => set({ pdd }),

  // columnas
  caed: 0,
  np: 0,
  pservicio: 0,
  fc: 0,
  atcc: 0,
  atce: 0,
  atcx: 0,
  setCaed: (caed) => set({ caed }),
  setNp: (np) => set({ np }),
  setPservicio: (pservicio) => set({ pservicio }),
  setFc: (fc) => set({ fc }),
  setAtcc: (atcc) => set({atcc}),
  setAtce: (atce) => set({ atce}),
  setAtcx: (atcx) => set({ atcx}),

  //zapatas
  qadm: 0,
  cs: 0,
  setQadm: (qadm) => set({ qadm }),
  setCs: (cs) => set({ cs }),

  //CARGA MUERTA
  //carga por area
  ca: 0,
  setCa: (ca) => set({ ca }),
  
  dimplx: 0,
  dimply: 0,
  setDimplx: (dimplx) => set({ dimplx }),
  setDimply: (dimply) => set({ dimply }),
  
  dimclx: 0,
  dimcly: 0,
  setDimclx: (dimclx) => set({ dimclx }),
  setDimcly: (dimcly) => set({ dimcly }),

  dimvlx: 0,
  dimvly: 0,
  setDimvlx: (dimvlx) => set({ dimvlx }),
  setDimvly: (dimvly) => set({ dimvly }),

  dimvlx2: 0,
  dimvly2: 0,
  setDimvlx2: (dimvlx2) => set({ dimvlx2 }),
  setDimvly2: (dimvly2) => set({ dimvly2 }),

  npa: 0,
  setNpa: (npa) => set({ npa }),

  pec: 0,
  setPec: (pec) => set({pec}),
  lcol: 0,
  setLcol: (lcol) => set({lcol}),

  lvx: 0,
  setLvx: (lvx) => set({lvx}),
  lvy: 0,
  setLvy: (lvy) => set({lvy}),

  cv1: 0,
  setCv1: (cv1) => set({cv1}),
  cv2: 0,
  setCv2: (cv2) => set({cv2}),

  total1: 0,
  setTotal1: (total1) => set({total1}),
  total2: 0,
  setTotal2: (total2) => set({total2}),
  total3: 0,
  setTotal3: (total3) => set({total3}),

}));

export default useStore;
