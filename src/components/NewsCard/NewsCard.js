import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { styled } from "@mui/system";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const StyledLink = styled(Link)({
  color: "red",
  fontWeight: "bold",
});

const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "14px",
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "20%",
  height: "40%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  padding: "2px",
  overflow: "scroll",

  ['@media (max-width:400px)']: { // eslint-disable-line no-useless-computed-key
    width: '80%'
  },
  ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
    width: '80%',
    height: '20%'
  },
  ['@media (max-width:1024px)']: { // eslint-disable-line no-useless-computed-key
    width: '60%',
    height: '40%'
  },
};


export default function NewsCard({
  image,
  title,
  date,
  url,
  content,
  details,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <StyledCard sx={{ maxWidth: 400, minHeight: 300, maxHeight: 500 }}>
        <CardMedia
          component="img"
          alt="article image"
          height="200"
          width="200"
          image={image}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            align="left"
            borderBottom="1px solid lightgray"
            paddingBottom="10px"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="black"
            fontSize={20}
            marginTop={2}
            fontWeight={300}
          >
            Date of Publication: {date}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleOpen}>
            Read More{" "}
            <i className="fa fa-ellipsis-v mx-2" aria-hidden="true"></i>
          </Button>
          <Button size="small">
            <StyledLink underline="none" href={url}>
              Source <i className="fa fa-info-circle" aria-hidden="true"></i>
            </StyledLink>
          </Button>
        </CardActions>
      </StyledCard>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" padding={2}>
            {details}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} padding={2}>
            {content}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
