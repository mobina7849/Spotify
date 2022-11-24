import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { listItems } from "../../../Data/list.data";
import Image from "next/image";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const TableLibrary = () => {
  return (
    <Grid px={3}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell># TITLE</TableCell>
            <TableCell>ALBUM</TableCell>
            <TableCell>DATE ADDED</TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              <InfoOutlinedIcon />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listItems.map((item) => (
            <TableRow hover sx={{cursor:'pointer'}}>
              <TableCell sx={{ borderBottom: "none" }}>
                <Grid display={"flex"} alignItems={"center"}>
                  <Grid display={"flex"} alignItems={"center"}>
                    <Grid>{item.id}</Grid>
                    <Grid>
                      <Image src={item.pic} />
                    </Grid>
                  </Grid>
                  <Grid
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                  >
                    <Typography variant="h3" component={"div"}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" component={"div"}>
                      {item.subtitle}
                    </Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell sx={{ borderBottom: "none" }}>{item.album}</TableCell>
              <TableCell sx={{ borderBottom: "none" }}>{item.date}</TableCell>
              <TableCell sx={{ borderBottom: "none",textAlign:'center'}}>
                <Grid display={"flex"} justifyContent={'center'}>
                  <Grid>
                  
                    <FavoriteBorderOutlinedIcon fontSize="small" />
                  </Grid>
                  <Grid px={1}> {item.time}</Grid>
                  <Grid>
                    <MoreHorizOutlinedIcon fontSize="small"/>
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Grid>
  );
};

export default TableLibrary;
