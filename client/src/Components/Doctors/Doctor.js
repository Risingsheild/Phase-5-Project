import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import { styled } from "@mui/material/styles";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Doctor({ doc }) {
  const [expanded, setExpanded] = useState(false);

  function handleExpandedClick(e) {
    e.preventDefault();
    setExpanded(!expanded);
  }

  console.log('At the Doctors', doc);
  return (
    <div className="doc-container">
      <Card className="doc-card">
        <CardHeader title={`Dr. ${doc.name}`} subheader="PharmD" />
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandedClick}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <h3>{doc[0].bio}</h3>
            <h5> Contact me at: {doc[0].email}</h5>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

export default Doctor;
