import React, { useContext } from "react";
import styles from "../Home/home.module.scss";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useGetProductQuery } from "../../services/productApi";
import { BasketContext } from "../../context/basketContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Box, flexbox } from "@mui/system";
import { Flex } from "antd";
const Home = () => {
  const { data: products } = useGetProductQuery();
  const { basket, setBasket } = useContext(BasketContext);

  return (
    <>
      <div className={styles.homePage}>
        <div className={styles.container}>
          <div className={styles.text}>
            <h1>WELCOME TO EATWELL</h1>
            <p>Come and eat well with our delicious & healthy foods.</p>
            <button>Reservation</button>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.sect2}>
          <div className={styles.left}>
            <p>Our Story</p>
            <h2>Welcome</h2>
            <p>
              Far far away, behind the word mountains, far from <br />
              the countries <br />
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p>
              A small river named Duden flows by their place and <br />
              supplies it with the necessary regelialia. It is a paradisematic
              country, <br /> in which roasted parts of sentences <br /> fly
              into your mouth.
            </p>
            <button>Learn More About Us</button>
          </div>
          <div className={styles.right}>
            <img
              src="https://preview.colorlib.com/theme/eatwell/images/about_img_1.jpg"
              alt=""
              width={600}
            />
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.sect3}>
          <div className={styles.text}>
            <h1>Our Offer This Summer</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          <Grid container spacing={2}>
            <div className={styles.cards}>
              {products &&
                products.data.map((product) => (
                  <Grid item xs={8} sm={12} md={6} lg={4}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        height="194"
                        image={product.img}
                        alt="Paella dish"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {product.price}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          style={{ color: "black" }}
                        >
                          {product.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.bio}
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton
                          aria-label="share"
                          onClick={() => {
                            const dublicateItem = basket.find(
                              (x) => x._id == product._id
                            );
                            if (dublicateItem) {
                              dublicateItem.count += 1;
                              setBasket([...basket]);
                              localStorage.setItem(
                                "basket",
                                JSON.stringify([...basket])
                              );
                            } else {
                              const newBasket = { ...product };
                              newBasket.count = 1;
                              setBasket([...basket, newBasket]);
                              localStorage.setItem(
                                "basket",
                                JSON.stringify([...basket, newBasket])
                              );
                            }
                          }}
                        >
                          <ShoppingBasketIcon />
                        </IconButton>
                        <Button>
                          <Link to={`/detail/${product._id}`}> Detail</Link>
                        </Button>
                      </CardActions>
                      <Collapse timeout="auto" unmountOnExit>
                        <CardContent></CardContent>
                      </Collapse>
                    </Card>
                  </Grid>
                ))}
            </div>
          </Grid>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.sect4}>
          <div className={styles.text}>
            <h1>News</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              gap: "30px",
              padding: "50px 0",
            }}
          >
              <Grid container spacing={2}>
              <Grid item xs={8} sm={8} md={6} lg={4}>
              <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 240, padding: 10 }}
                image="https://preview.colorlib.com/theme/eatwell/images/offer_3.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  We Have Dilecious Food
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </Typography>
              </CardContent>
              <CardActions>
                <button
                  style={{
                    width: "200px",
                    height: "50px",
                    color: "#999999",
                    size: "16px",
                    marginTop: "20px",
                    backgroundColor: "orange",
                    borderStyle: "none",
                  }}
                >
                  Read More
                </button>
              </CardActions>
            </Card>
              </Grid>
              <Grid item xs={8} sm={8} md={6} lg={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 240, padding: 10 }}
                image="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  We Have Dilecious Food
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </Typography>
              </CardContent>
              <CardActions>
                <button
                  style={{
                    width: "200px",
                    height: "50px",
                    color: "#999999",
                    size: "16px",
                    marginTop: "20px",
                    backgroundColor: "orange",
                    borderStyle: "none",
                  }}
                >
                  Read More
                </button>
              </CardActions>
            </Card>
            </Grid>
            <Grid item xs={8} sm={8} md={6} lg={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 240, padding: 10 }}
                image="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  We Have Dilecious Food
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </Typography>
              </CardContent>
              <CardActions>
                <button
                  style={{
                    width: "200px",
                    height: "50px",
                    color: "#999999",
                    size: "16px",
                    marginTop: "20px",
                    backgroundColor: "orange",
                    borderStyle: "none",
                  }}
                >
                  Read More
                </button>
              </CardActions>
            </Card>
            </Grid>
            </Grid>
          </Box>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.sect5}>
          <div className={styles.text}>
            <h1>Gallery</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className={styles.parent}>
            <div className={styles.div1}>
              <img
                src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg"
                alt=""
              />{" "}
            </div>
            <div className={styles.div2}>
              <img
                src="https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg"
                alt=""
              />{" "}
            </div>
            <div className={styles.div3}>
              <img
                src="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg"
                alt=""
              />{" "}
            </div>
            <div className={styles.div4}>
              <img
                src="https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg"
                alt=""
              />{" "}
            </div>
            <div className={styles.div5}>
              {" "}
              <img
                src="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg"
                alt=""
              />
            </div>
            <div className={styles.div6}>
              {" "}
              <img
                src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
