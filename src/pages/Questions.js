import { Box, Button, Typography } from "@mui/material"
import useAxios from "../hooks/useAxios"

export const Questions = () => {

  let apiUrl = `/api.php?amount=10&category=19&difficulty=medium&type=multiple`

  const { response, error, loading } = useAxios({ url: apiUrl })

  return (
    <Box>
      <Typography variant='h4'>Question 1</Typography>
      <Typography mt={5}>This is the question</Typography>
      <Box mt={2}><Button variant='contained'>Answer 1</Button></Box>
      <Box mt={2}><Button variant='contained'>Answer 2</Button></Box>
      <Box mt={2}><Button variant='contained'>Answer 3</Button></Box>
      <Box mt={2}><Button variant='contained'>Answer 4</Button></Box>
      <Box mt={2}><Button variant='contained'>Answer 5</Button></Box>
      <Box mt={2}><Button variant='contained'>Answer 6</Button></Box>
      <Box mt={5}>Score: 2 / 5</Box>
    </Box>
  )
}
