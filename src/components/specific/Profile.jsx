import { Avatar, Stack, Typography, Grid } from '@mui/material'
import { Email } from '@mui/icons-material'

const Profile = () => {
  return (
    <Grid container justifyContent="flex-start">
      <Grid item>
        <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
          <Avatar
            sx={{
              width: 200,
              height: 200,
              objectFit: "contain",
              marginBottom: "1rem",
              border: "5px solid white"
            }}
          />
          <ProfileCard text={"shiva reddy"} heading={"Bio"} />
          <ProfileCard text="shiva@83" heading="Username" Icon={<Email />} />
          <ProfileCard text="k.shiva reddy" heading="Name" />
        </Stack>
      </Grid>
    </Grid>
  )
}

const ProfileCard = ({ text, Icon, heading }) => {
  return (
    <>
      <Stack direction={"row"}
        alignItems={"flex-start"}
        spacing={"1rem"}
        color={"white"}
        textAlign={"center"}>
        {Icon && Icon}
      </Stack>
      <Stack>
        <Typography variant='body1'>{text}</Typography>
        <Typography color={"gray"} variant='caption'>{heading}</Typography>
      </Stack>
    </>
  )
}

export default Profile
