import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import './Results.scss'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

function Results() {
  const state = useSelector((state: RootState) => state.results)
  console.log(state.arr)
  return (
    <main className='main'>
      <section className='results wrapper'>
        <TableContainer>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow sx={{ '& > *': { fontSize: '26px', fontWeight: 600 } }}>
                <TableCell>Player</TableCell>
                <TableCell align='right'>Result</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.arr.map((item) => (
                <TableRow key={item.player} sx={{ '& > *': { fontSize: '20px', fontWeight: 600 } }}>
                  <TableCell component='th' scope='row'>
                    {item.player}
                  </TableCell>
                  <TableCell align='right'>{item.rightAnswers}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </main>
  )
}

export default Results
