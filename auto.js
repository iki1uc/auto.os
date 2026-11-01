// index.html -> auto.os
import SYS from './SYS.js'
SYS.boot({
  kernel: 'core.js',
  dna: 'axiom.js',
  rooms: ['HOLO.room.js','NC.room.js','RESPO.room.js'],
  skin: './9k.os.html',
  roms: ['d.hdf.rom','e.hdf.rom','i.hdf.rom','n.hdf.rom','o.hdf.rom','r.hdf.rom','s.hdf.rom','u.hdf.rom','w.hdf.rom'],
  autorun: 7482
})
