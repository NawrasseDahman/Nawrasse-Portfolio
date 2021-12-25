import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { FaSnapchatSquare, FaInstagramSquare, FaGithubSquare, FaFacebookSquare } from 'react-icons/fa';
import { FaRegCaretSquareRight } from "react-icons/fa";

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m A Full-Stack Developer Who Is A Movie Junkie!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Dreams Make Good Stories, My Friend.
          </Heading>
          <p>Digital Craftsman ( Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/nawrasse.png"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Who Am I
        </Heading>
        <Paragraph>
          Nawrasse Is A Full-Stack Developer & Designer Based In Tangier With Passion For 
          Building Digital Services / Stuff He Wants Or Likes Or Even Needs. He Knows A Lot Of Programming
          Languages, Which Makes Him An Expert At Doing His Thing.
          When Not Online, He Loves Hanging Out With His Family & Animals. Currently, He&apos;s Focusing On His
          Passion For Movies & Tv Shows And Everything In Between.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/business">
            <Button rightIcon={<FaRegCaretSquareRight />} colorScheme="teal">
              Business Offers
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          My Biography
        </Heading>
        <BioSection>
          <BioYear>2004</BioYear>
          Born In Tangier, Morocco
        </BioSection>
        <BioSection>
          <BioYear>2012</BioYear>
          Started My Coding Journey
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Worked As Web Developer At BrainStormGames
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Worked As Web Designer At UrbanSASS Development
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Works As A Freelancer & Continuing His Studies
        </BioSection>
      </Section>

      <Section delay={0.3} />
        <Heading as="h3" variant="section-title">
          What I Love
        </Heading>
        <Paragraph>
         I Love Watching Movies & Tv Shows, One Of My Favorite All Time Tv Shows Are
         The Vampire Diaries Then There&apos;s The Originals And Legacies.
         I Also Enjoy Coding, Listening To Music, Playing Chess, Movie Nights, Holidays And More....
        </Paragraph>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Social Media
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/NawrasseDahman" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={FaGithubSquare} />}
              >
                @NawrasseDahman
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.snapchat.com/add/nawrassedahman" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={FaSnapchatSquare} />}
              >
                @NawrasseDahman
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/nawrassedahman" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={FaInstagramSquare} />}
              >
                @NawrasseDahman
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook.com/nawrassedahman" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={FaFacebookSquare} />}
              >
                @NawrasseDahman
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/projects">
            <Button rightIcon={<FaRegCaretSquareRight />} colorScheme="teal">
              Popular Projects
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
