import { Grid, Typography } from "@mui/material";
import { cardRecently } from "../../../Data/cardRecently.data";
import CardHome from "../Card/CardHome";

const Cards = ({category,data}) => {
  return (
    <Grid m={4}>
      <Grid>
        <Typography variant={'h2'}>
            {category}
        </Typography>
      </Grid>
      <Grid
        display={"flex"}
        maxWidth={"1100px"}
        gap={2}
        marginTop={2}
        sx={{ overflowX: "auto " }}
    
      >
        {data.map((item) => (
          <Grid item>
            <CardHome cardData={item} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Cards;
