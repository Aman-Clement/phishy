import {Box,Image,Text} from "@chakra-ui/react"
import giphy from "../assets/giphy.gif"
import stars from "../assets/stars.jpeg"
import tutahua from "../assets/tutahua.mp3"

const Lmfao = () => {
    return ( 
        
        <Box backgroundImage={stars} backgroundSize="cover" height="100vh">
        <audio autoPlay loop>
            <source src={tutahua}></source>
        </audio>
        <Box maxWidth="600px" mx="auto" verticalAlign="center" paddingTop="100px">
             <Text color="white">Unfortunately the requested URL is broken</Text>
            <Image src={giphy} alt="catrules"></Image>
        </Box>
        </Box>
     );
}
 
export default Lmfao;