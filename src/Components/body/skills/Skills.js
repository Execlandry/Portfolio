import React from 'react'
import Separator from '../../common/separator/Separator'
import { SkillsData } from '../../data/Skills'
import SkillCard from './SkillCard';
import './skills.css'
function Skills() {
    const data = SkillsData;
    return (
        <div className="skills">
        <Separator/>
        
        <label htmlFor="" className="section-title">
        Skills
            <div className = "skills-container">
            {data.map(item=>{
                return(
                    <div className="skills-section">
                        <label className="skills-section-title" htmlFor="">{item.type}</label>
                        <div className="skills-list">
                            {item.list.map(skill=>{
                                return(
                                    <SkillCard skill={skill}/>
                                )
                            })}
                        </div>
                    </div>
                )
            })}


            </div>
        </label>

            
        </div>
    )
}

export default Skills
