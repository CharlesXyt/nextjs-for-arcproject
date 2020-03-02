import React from 'react'
import Lottie from 'react-lottie'
import Head from 'next/head'
import Link from '../src/Link'
import {makeStyles,useTheme} from '@material-ui/core/styles'
import {
    Grid,
    Typography,
    useMediaQuery,
    IconButton,
    Hidden
} from '@material-ui/core'

import documentsAnimation from '../src/animations/documentsAnimation/data'
import scaleAnimation from '../src/animations/scaleAnimation/data.json'
import autoAnimation from '../src/animations/automationAnimation/data.json'
import uxAnimation from '../src/animations/uxAnimation/data'

import CallToAction from '../src/ui/CallToAction'

const useStyles = makeStyles(theme => ({
    heading:{
        maxWidth:"40em"
    },
    arrowContainer:{
        marginTop:"0.5em"
    },
    rowContainer:{
        padding:"0em 5em 0em 5em",
        [theme.breakpoints.down('sm')]:{
            padding:"0em 1.5em 0em 1.5em",
        }
    },
    itemContainer:{
        maxWidth:"40em"
    }
}))

export default function CustomSoftware(props){
    
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))
    const {setValue,setSelectedIndex} = props

    const documentsOptions = {
        loop: true,
        autoplay: true, 
        animationData: documentsAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    const scaleOptions = {
        loop: true,
        autoplay: true, 
        animationData: scaleAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const autoOptions = {
        loop: true,
        autoplay: true, 
        animationData: autoAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const uxOptions = {
        loop: true,
        autoplay: true, 
        animationData: uxAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    
    return (
        <Grid container direction="column">
            <Head>
                <title key="title">Custom Software Development and Design - Free Estimate</title>
                <meta name="description" key="description" content="Cutting-edge custom software development with gorgeous designs from scratch - let us optimize your business, solving problems instead of creating new ones"/>
                <meta property="og:title" content="Bringing West Coast Technology to the Midwest | Custom Software Development" key="og:title"/>
                <meta property="og:url" key="og:url" content="material-ui-charles.herokuapp.com/customsoftware"/>
                <link rel="canonical" key="canonical" href="material-ui-charles.herokuapp.com/customsoftware"/>
            </Head>
            <Grid item container justify={matchesMD ? "center": undefined}  className={classes.rowContainer} style={{marginTop:matchesXS ? "1em":"2em"}}>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{marginRight:"1em",marginLeft:"-3.5em"}}>
                        <IconButton style={{backgroundColor:"transparent"}} component={Link} href="/services" onClick={()=>setSelectedIndex(0)}>
                            <img src="/assets/backArrow.svg" alt="back to services page"/>
                        </IconButton>
                    </Grid>
                </Hidden>
                
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography variant="h1" align={matchesMD ? "center":"inherit"}>Custom Software Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph align={matchesMD ? "center":"inherit"}>
                            Whether we’re replacing old software or inventing new solutions, Arc Development is here to help your business tackle technology.
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMD ? "center":"inherit"}>
                            Using regular commercial software leaves you with a lot of stuff you don’t need, without some of the stuff you do need, and ultimately controls the way you work.
                            Without using any software at all you risk falling behind competitors and missing out on huge savings from increased efficiency.
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMD ? "center":"inherit"}>
                            Our custom solutions are designed from the ground up with your needs, wants, and goals at the core. This collaborative process produces finely tuned software that is much more effective at improving your workflow and reducing costs than generalized options.
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMD ? "center":"inherit"}>
                            We create exactly what you what, exactly how you want it.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton style={{backgroundColor:"transparent"}} component={Link} href="/mobileapp" onClick={()=>setSelectedIndex(2)}>
                            <img src="/assets/forwardArrow.svg" alt="forward to andriod page"/>
                        </IconButton>
                    </Grid>
                </Hidden>
                
            </Grid>
            
            <Grid item container justify="center" style={{marginTop:"16em",marginBottom:"20em"}}  className={classes.rowContainer}>
                <Grid item container direction="column" alignItems="center" md style={{maxWidth:"40em"}}>
                    <Grid item>
                        <Typography variant="h4">Save Energy</Typography>
                    </Grid>
                    <Grid item>
                        <img src="/assets/bulb.svg" alt="lightbulb"/>
                    </Grid>
                </Grid>
                <Grid item container direction="column" alignItems="center" md style={{maxWidth:"40em",marginBottom:matchesSM ? "10em":0,marginTop:matchesSM ? "10em":0}}>
                    <Grid item>
                        <Typography variant="h4">Save Time</Typography>
                    </Grid>
                    <Grid item>
                        <img src="/assets/stopwatch.svg" alt="stopwatch"/>
                    </Grid>
                </Grid>
                <Grid item container direction="column" alignItems="center" md style={{maxWidth:"40em"}}>
                    <Grid item>
                        <Typography variant="h4">Save Money</Typography>
                    </Grid>
                    <Grid item>
                        <img src="/assets/cash.svg" alt="cash"/>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item container direction={matchesMD?"column":"row"} justify="space-between" alignItems={matchesMD?"center":undefined}  className={classes.rowContainer}>
                <Grid item container className={classes.itemContainer} md style={{marginBottom:matchesMD?"15em":0}} direction={matchesSM?"column":"row"} alignItems={matchesSM?"center":undefined}>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center":"inherit"}>Digital Documents & Data</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesSM ? "center":"inherit"} paragraph>Reduce Errors. Reduce Waste. Reduce Costs.</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesSM ? "center":"inherit"} paragraph>Billions are spent annually on the purchasing, printing, and distribution of paper. On top of the massive environmental impact this has, it causes harm to your bottom line as well.</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesSM ? "center":"inherit"} paragraph>By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your communication, and help the Earth.</Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options={documentsOptions} style={{maxWidth:275,maxHeight:275,minHeight:250}}/>
                    </Grid>
                </Grid>
                <Grid item container className={classes.itemContainer} md  direction={matchesSM?"column":"row"} alignItems={matchesSM?"center":undefined}>
                    <Grid item md>
                        <Lottie options={scaleOptions} style={{maxWidth:280,maxHeight:260}}/>
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center":"right"}>Scale</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesSM ? "center":"right"} paragraph>Whether you’re a large brand, just getting started, or taking off right now, our application architecture ensures pain-free growth and reliability.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item container style={{marginBottom:"20em",marginTop:"20em"}}  className={classes.rowContainer}>
                <Grid item container direction="column" alignItems="center" >
                    <Grid item>
                        <img src="/assets/root.svg" alt="tree with root" height={matchesSM? "300em":"400em"} weight={matchesSM? "300em":"400em"}/>
                    </Grid>
                    <Grid item className={classes.itemContainer}>
                        <Typography variant="h4" align="center" gutterBottom>Root-Cause Analysis</Typography>
                        <Typography variant="body1" paragraph align="center">Many problems are merely symptoms of larger, underlying issues.</Typography>
                        <Typography variant="body1" paragraph align="center">We can help you thoroughly examine all areas of your business to develop a holistic plan for the most effective implementation of technology.</Typography>
                    </Grid>
                </Grid>

            </Grid>
            <Grid item container direction={matchesMD?"column":"row"} justify="space-between" style={{marginBottom:"10em"}}  alignItems={matchesMD?"center":undefined}  className={classes.rowContainer}>
                <Grid item container className={classes.itemContainer} md style={{marginBottom:matchesMD?"15em":0}}  direction={matchesSM?"column":"row"} alignItems={matchesSM?"center":undefined}>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center":"inherit"}>Automation</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesSM ? "center":"inherit"} paragraph>Why waste time when you don’t have to?</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesSM ? "center":"inherit"} paragraph>We can help you identify processes with time or event based actions which can now easily be automated.</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesSM ? "center":"inherit"} paragraph>Increasing efficiency increases profits, leaving you more time to focus on your business, not busywork.</Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options={autoOptions} style={{maxWidth:275,maxHeight:275,minHeight:250}}/>
                    </Grid>
                </Grid>
                <Grid item container className={classes.itemContainer} md  direction={matchesSM?"column":"row"} alignItems={matchesSM?"center":undefined}>
                    <Grid item md>
                        <Lottie options={uxOptions} style={{maxWidth:250}}/>
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center":"right"}>User Experience Design</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesSM ? "center":"right"} paragraph>A good design that isn’t usable isn’t a good design.</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesSM ? "center":"right"} paragraph>So why are so many pieces of software complicated, confusing, and frustrating?</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesSM ? "center":"right"} paragraph>By prioritizing users and the real ways they interact with technology we’re able to develop unique, personable experiences that solve problems rather than create new ones.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={setValue}/>
            </Grid>
        </Grid>
    )
}