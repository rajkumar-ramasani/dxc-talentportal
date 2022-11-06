import axios from "axios"
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App"
import Img from '../image/skill.jpg';
import People from '../image/people.jpg';
import Demand from '../image/demand.jpg';
import Skill from '../image/skill1.jpg';
import Partial from '../image/skill3.jpg';
import Upload from '../image/upload.jpg';
export default function Home(props) {
    const contextval = useContext(UserContext);
    const demands = props.demands;
    const [resourcesdata, setresourcesdata] = useState([])
    const resources = props.resources;
    console.log("111 ", demands);
    let resval = {};
    let resoursearr = [];
    const [bestmatch, setbestmatch] = useState([])
    const [closematch, setclosematch] = useState([])
    useEffect(() => {
        let index = 0;
        resources.forEach(resKey => {

            resval[index] = {
                "job_level": resKey.job_level,
                "emp_name": resKey.emp_name,
                "emp_email": resKey.email,
                "emp_id": resKey.emp_id,
                "emp_pskill": resKey.primary_skill,
                "emp_sskil": resKey.secondary_skill,
            }
            index++;
        })

        Object.entries(resval).forEach(([key, value]) => {
            resoursearr.push(value)

        })
        setresourcesdata(resoursearr)

    }, [resources]);
    function getMatch(a, b) {
        var matches = [];

        for (var i = 0; i < a.length; i++) {
            for (var e = 0; e < b.length; e++) {
                if (a[i] === b[e]) matches.push(a[i]);
            }
        }
        return matches;
    }
    function calcPercentage(match, total) {
        return (match / total) * 100
    }
    const assignfun = (dataarr) => {
        let arr1 = []
        let arr2 = [];
        Object.entries(dataarr).forEach(([key, value]) => {
            // console.log("assign ", value)
            if (value.percentage > 50) {
                arr1.push(value)

            } else {
                arr2.push(value)

            }
        })
        setclosematch(arr2)
        setbestmatch(arr1)

    }
    let resultData = {}
    useEffect(() => {

        if (demands.length > 0 && resources.length > 0) {
            demands.forEach(demKey => {
                resources.forEach(resKey => {
                 //   console.log("111 ", resKey)
                    let demSkill = (demKey.primary_skill).split(",");
                    let resSkill = (resKey.primary_skill).split(",");
                    let match_skills = getMatch(demSkill, resSkill);
                    if (demKey.job_level == demKey.job_level) {
                        resultData[demKey.demand_id] = {
                            "position_id": demKey.position_id,
                            "job_level": demKey.job_level,
                            "capability": demKey.capability,
                            "mtach_skills": match_skills,
                            "percentage": calcPercentage(match_skills.length, demSkill.length),
                            "job_LevelMatch": "yes",
                            "demand_id": demKey.demand_id,
                            "emp_name": resKey.emp_name,
                            "emp_email": resKey.email,
                            "emp_id": resKey.emp_id,
                            "emp_pskill": resKey.primary_skill,
                            "emp_sskil": resKey.secondary_skill,

                        }
                    } else {
                        resultData[demKey.demand_id] = {
                            "position_id": demKey.position_id,
                            "job_level": demKey.job_level,
                            "capability": demKey.capability,
                            "mtach_skills": match_skills,
                            "percentage": calcPercentage(match_skills.length, demSkill.length),
                            "job_LevelMatch": "No",
                            "demand_id": demKey.demand_id,
                            "emp_name": resKey.emp_name,
                            "emp_email": resKey.email,
                            "emp_id": resKey.emp_id,
                            "emp_pskill": resKey.primary_skill,
                            "emp_sskil": resKey.secondary_skill,

                        }

                    }

                })

            });
            var matchresourse = resultData
            console.log("===" + matchresourse)

            assignfun(matchresourse)
        }


    }, [demands, resources]);

    const viewmatch = (tablecont) => {
        contextval.setcontextdata({
            ...contextval.ontextdata,
            tabledata: tablecont,
            fieldscheck: true,
        })

    }
    const viewalldemand = (tablecont) => {
        contextval.setcontextdata({
            ...contextval.ontextdata,
            tabledata: tablecont,
            fieldscheck: false,
        })

    }
    return (
        <div>
            <div className="cards">

                <article className="card">
                    <div className="text">
                    <img height="30%" width="30%" src= {People} alt="pic" />
                        <h3>Available Resources</h3>
                        <Link to="displayTable" onClick={() => { viewalldemand(resourcesdata) }}>List of Available resources is {resourcesdata.length} </Link>


                    </div>
                </article>
                <article className="card">
                    <div className="text">
                    <img height="30%" width="30%" src= {Demand} alt="pic" />
                        <h3>New Demands</h3>

                        <Link to="demandList" onClick={() => { viewalldemand(demands) }}>List of demands is {demands.length} </Link>


                    </div>
                </article>
                <article className="card">
                    <div className="text">
                    <img height="30%" width="30%" src= {Skill} alt="pic" />
                        <h3>Best Skill Match-(80% above)</h3>
                        <Link to="displayTable" onClick={() => { viewmatch(bestmatch) }}>{bestmatch.length} Results</Link>

                    </div>
                </article>
                <article className="card">
                    <div className="text">
                    <img height="30%" width="30%" src= {Partial} alt="pic" />
                        <h3>Near Skill Match-(60% above)</h3>
                        <Link to="displayTable" onClick={() => { viewmatch(closematch) }}>{closematch.length}  Results</Link>

                    </div>
                </article>
                <article className="card">
                    <div className="text">
                    <img height="30%" width="30%" src= {Upload} alt="pic" />
                        <h3>Upload Demand</h3>


                    </div>
                </article>
            </div>
            <svg width="5%" height="5%" viewBox="0 0 180 99" fill="none" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                <path d="M8.12903 85.7419V98.129H4.64516V85.7419H0V82.6452H12.7742V85.7419H8.12903ZM17.4194 97.9355V82.4516H29.0323V85.5484H20.7097V88.6451H28.0645V91.7419H20.7097V95.0322H29.0323V98.129H17.4194V97.9355ZM41.6129 98.3226C36.9677 98.3226 33.6774 94.8387 33.6774 90.3871C33.6774 85.9355 36.9677 82.4516 41.8065 82.4516C44.7097 82.4516 46.4516 83.4193 48 84.7742L45.6774 87.0968C44.5161 85.9355 43.3548 85.3548 41.8065 85.3548C39.2903 85.3548 37.3548 87.4839 37.3548 90.1935C37.3548 92.9032 39.0968 95.0322 41.8065 95.0322C43.5484 95.0322 44.7097 94.2581 45.871 93.2903L48 95.4193C46.2581 97.1613 44.5161 98.3226 41.6129 98.3226ZM62.3226 97.9355V91.7419H56.129V97.9355H52.6452V82.4516H56.129V88.6451H62.3226V82.4516H65.8065V97.9355H62.3226ZM82.6452 97.9355L75.0968 88.0645V97.9355H71.8064V82.4516H74.9032L82.2581 91.9355V82.4516H85.5484V97.9355H82.6452ZM98.7097 98.3226C93.871 98.3226 90.5807 94.8387 90.5807 90.3871C90.5807 85.9355 94.0645 82.4516 98.9032 82.4516C103.742 82.4516 107.032 85.9355 107.032 90.3871C107.032 94.6452 103.548 98.3226 98.7097 98.3226ZM103.355 90.1935C103.355 87.4839 101.419 85.3548 98.7097 85.3548C96 85.3548 94.0645 87.4839 94.0645 90.1935C94.0645 92.9032 96 95.0322 98.7097 95.0322C101.613 95.2258 103.355 92.9032 103.355 90.1935ZM111.871 97.9355V82.4516H115.355V94.8387H123.097V97.9355H111.871ZM134.516 98.3226C129.677 98.3226 126.387 94.8387 126.387 90.3871C126.387 85.9355 129.871 82.4516 134.71 82.4516C139.548 82.4516 142.839 85.9355 142.839 90.3871C142.839 94.6452 139.355 98.3226 134.516 98.3226ZM139.161 90.1935C139.161 87.4839 137.226 85.3548 134.516 85.3548C131.806 85.3548 129.871 87.4839 129.871 90.1935C129.871 92.9032 131.806 95.0322 134.516 95.0322C137.226 95.0322 139.161 92.9032 139.161 90.1935ZM155.032 98.3226C150.194 98.3226 146.903 95.0323 146.903 90.3871C146.903 85.9355 150.387 82.4516 155.032 82.4516C157.742 82.4516 159.484 83.2258 161.032 84.5806L158.903 87.0968C157.742 86.129 156.581 85.5484 154.839 85.5484C152.323 85.5484 150.387 87.6774 150.387 90.3871C150.387 93.2903 152.323 95.2258 155.032 95.2258C156.194 95.2258 157.355 94.8387 158.323 94.2581V92.129H154.839V89.0322H161.613V95.8064C160.065 97.1613 157.935 98.3226 155.032 98.3226ZM174 91.7419V97.9355H170.516V91.7419L164.516 82.4516H168.581L172.258 88.6451L175.935 82.4516H179.806L174 91.7419Z" fill="white"></path>
                <path d="M59.4194 40.2581C59.0323 42.9677 58.2581 45.6774 57.0968 48.3871C55.3548 52.4516 52.8387 56.3226 49.5484 59.6129C43.3548 66 33.871 70.0645 24.3871 70.0645H0V56.129H24.1936C30 56.129 35.4194 54 39.0968 50.129C41.8065 47.4194 43.7419 44.129 44.7097 40.4516H59.4194V40.2581ZM59.4194 29.6129C59.0323 26.9032 58.2581 24.1935 57.0968 21.4839C55.3548 17.4194 52.8387 13.5484 49.5484 10.4516C43.1613 4.06452 33.871 0 24.3871 0H0V13.9355H24.1936C30 13.9355 35.4194 16.0645 39.0968 19.9355C41.8065 22.6452 43.7419 25.9355 44.7097 29.6129H59.4194ZM90 46.4516L71.4194 69.6774H53.0323L80.7097 34.8387L53.0323 0H71.4194L90 23.2258L108.387 0H126.774L99.0968 34.8387L126.774 69.6774H108.387L90 46.4516ZM135.097 40.2581C136.065 43.7419 138 47.0323 140.71 49.9355C144.387 53.8064 150 55.9355 155.613 55.9355H179.806V69.6774H155.613C145.935 69.6774 136.645 65.6129 130.452 59.2258C127.161 55.9355 124.645 52.0645 122.903 48C121.742 45.2903 120.968 42.7742 120.581 39.871H135.097V40.2581ZM135.097 29.6129C136.065 26.129 138 22.8387 140.71 19.9355C144.387 16.0645 150 13.9355 155.613 13.9355H179.806V0H155.613C145.935 0 136.645 4.06452 130.452 10.4516C127.161 13.7419 124.645 17.6129 122.903 21.6774C121.742 24.3871 120.968 26.9032 120.581 29.8064H135.097V29.6129Z" fill="white"></path>
            </svg>

        </div>
    )
}
