import React from 'react'
import {  Col, Container, Row } from 'react-bootstrap'
import { blogpage5 } from '../../assets/img/blog_imgs'
// import blog1 from "../../assets/img/blogLarge.jpg"
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

const BlogDetailsFive = () => {
    return (
        <>
            <Header />
            <section>
                <Container  >
                    <Row className='text-white mb-3'>
                        <Col xs={12}>
                        <div className='profile '>
                        <div className='cover-profile'>
                            <img src={blogpage5} alt="" className='cover-img w-100 h-100 text-center rounded-4' />
                        </div>
                    </div>
                    <div>
                        <p className='py-3'>June 5,2022</p>
                    </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row className='text-white'>
                        <Col xs={12}>
                            <h1 className='pb-3'>
                                Why is the Indian stock market falling?
                            </h1>
                            
                               
                                    <p>Since the Sensex increased by around 10,000 points in a single year, 2021 was the strongest year for BSE in nominal terms. Between January 1, 2021, and December 29, 2021, the BSE Sensex increased by 10,054 points. In absolute terms, this is the largest year-over-year growth in recorded history. The BSE Sensex has shown the greatest return among major Asian economies in the current year and has the second-highest performance in the world, according to a comparison with 10 key international indexes spanning nine nations.According to a report in the Economic Times, India's benchmark index Nifty has increased by 45 percent over the last year and 19 percent on YTD basis. In the last year, the market capitalization of the Indian market has grown by a staggering $1 trillion, reaching $3.2 trillion. This indicates that, with a value of 23 times estimated earnings for FY22, Indian equities are likewise the most expensive in the whole globe. Due to a quicker pace of economic recovery, the consensus for FY23 has increased by 2.1 percent while the expected profit growth for the current fiscal year has been reduced by 2.7 percent.<br />Since 2021, a number of things have happened to the stock market that might push it into a full-fledged bear market. How to invest in the market today is a question on investors' minds. What caused the market to fall, and why? </p>
                                    <p>Let's understand the factors affecting Indian Stock market</p>
                                    <h4 className='pt-4'>Geopolitics</h4>
                                    <ul type="none">
                                        <li>In 2021, the US withdrawal from Afghanistan caused a rise in geopolitical tensions. The markets, however, disregarded this worry because it was long-term in nature and went on.  </li>
                                    </ul>
                                    <h4 className='pt-4'>Supply Chain concern</h4>
                                    <ul type="none">
                                        <li>It was realized that supply chain problems, particularly with regard to food, oil, and semiconductors, would likely persist for a time, maybe a few years. However, the market was ready to overlook this since it was thought that when global supply chains gradually recovered, the issues would be resolved over time. This was a serious error of judgment. The issues have grown progressively worse.  </li>
                                    </ul>
                                    <h4 className='pt-4'>COVID-19 Pandemic (omicron variant)</h4>
                                    <ul type="none">
                                        <li>The most recent coronavirus strain posed a threat to global disruption. As 2022 drew near, the market waited and observed the spread of this variant. The market quickly realized that the Omicron wave wouldn't be as hazardous as the earlier waves. Therefore, this issue was also disregarded. The markets were still in a bullish position in the beginning of 2022. The Indian market was gradually approaching its all-time high while the US market was booming. But then expectations took a different turn.  </li>
                                    </ul>
                                    <h4 className='pt-4'>Russia-Ukraine War(omicron variant)</h4>
                                    <ul type="none">
                                        <li>When the conflict between Russia and Ukraine erupted, commodities prices skyrocketed. It wasn't simply oil this time. New records were set for the cost of food, fertilizer, natural gas, and several metals. Already high inflation saw a significant increase.Family budgets were significantly harmed by this. People started reducing their intake. This may be seen in India's meager GDP growth of 4% from January to March 2022. More and more investors started to withdraw their money as the markets dropped.  </li>
                                    </ul>
                                    <h4 className='pt-4'>Increasing Interest Rates</h4>
                                    <ul type="none">
                                        <li>When the Russia-Ukraine war first broke out, interest rates were still quite low. With the US Fed's rate increase, that has altered. The US Federal Reserve is allegedly the world's central bank. Whatever they do, other countries will quickly follow. And during the past few months, that is precisely what has occurred. The RBI in India raised the repo rate and CRR together initially. Then, in June 2022, it did so again by raising rates. In August 2022, the market anticipates another rate increase. </li>
                                        <li>The fight against inflation will henceforth be the primary emphasis of central banks from now on. Rate increases have already had an effect on several asset types. The market has concluded that in order to effectively combat inflation, substantial hikes would be implemented first, followed by lesser hikes. Due to this, all interest rates—from bank FDs to government bonds—have increased. The market has started to decline as a result of investors shifting their money from equity to fixed income assets as interest rates rise. </li>
                                    </ul>

                                    <h4 className='pt-4'>Selling by Foreign Institutional Investors (FII)</h4>
                                    <ul type="none">
                                        <li>The persistent selling by FIIs has been another factor in the market's decline. They have sold more over Rs 3.25 lakh crore since October 2021. Therefore, it is reasonable to conclude that FII selling has been the main factor in the market's failure to set a new high.</li>

                                    </ul>
                                    <h4 className='pt-4'>US Recession</h4>
                                    <ul type="none">
                                        <li>Two consecutive quarters of negative growth, or an economic contraction, are the classic definition of a recession. We have seen how the US first quarter GDP growth was negative. By the end of July, the US second quarter GDP data is anticipated to be released. That will establish whether the largest economy on earth is experiencing a recession or not. The market believes that if the US enters a recession, a worldwide recession may follow. Markets have been falling as a result of this concern.</li>

                                    </ul>
                                    <h4 className='pt-4'>Sudden peak in stock prices</h4>
                                    <ul type="none">
                                        <li>The market wouldn't be in such peril if we had a gradual bull market during the previous two years. Instead, the recovery after the pandemic catastrophe took the form of a steep V. Stocks rose too quickly and too far, and they continued to do so even after their prices significantly outperformed their foundations. These supposedly "hot stocks" have to return to reality at some point.</li>

                                    </ul>
                                    <h4 className='pt-4'>The way forward</h4>
                                    <ul type="none">
                                        <li>The aforementioned reasons have made India's economic prospects hazy. All three of these essential imports from Russia and Ukraine—crude oil prices, wheat prices, and edible oil prices—have increased by 50% or more during the past two weeks, as a result of the war. This predicament is making things worse for India, which has already been struggling with inflation for a long time. Government revenue would decrease and subsidy expenses would rise as a result of higher gasoline and fertilizer prices. Additionally, the current account balance and currency valuation will be affected by capital outflows and growing import costs. </li>
                                        <li className='py-3'>After taking the above discussion into consideration, India is predicted to thrive at a rate of 8.3 to 8.8 percent for FY2021-22, followed by two fiscal years of equally robust growth of more than 7.5 percent and 6.5 percent, respectively. </li>
                                    </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default BlogDetailsFive 