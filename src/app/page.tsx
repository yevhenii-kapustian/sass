'use client'

import Image from "next/image";
import introductionImage from '../../public/mainintroduction.png';
import CategoryItems from "@/components/CategoryItems";
import { useEffect, useState } from "react";
import { CategoryType } from "@/types/type";
import CategorySaved from "@/components/CategorySaved";

export default function Home() {
  const [savedCourse, setSavedCourse] = useState<CategoryType[]>([])

  const handleClickSave = (item:CategoryType): void => {
    const exist = savedCourse.find(course => course.name === item.name);
    if (!exist) {
      setSavedCourse(prev => [...prev, item])
    } 
  }

  const handleClickRemove = (item:CategoryType): void => {
    setSavedCourse(prev => prev.filter(course => course.name !== item.name))
  }

  useEffect(() => {
    const localCourse = localStorage.getItem("saveLocalCourse")
    if (localCourse) {
      setSavedCourse(JSON.parse(localCourse))
    }
  }, [])

  useEffect(() => {
    if (savedCourse.length > 0) {
      localStorage.setItem("saveLocalCourse", JSON.stringify(savedCourse))
    } else {
      localStorage.removeItem("saveLocalCourse")
    }
  }, [savedCourse])

  return (
    <>
    <div className="main__introduction">
      <Image src={introductionImage} alt="introductionImage" width={1920} height={1920} priority/>
    </div>
    <CategoryItems handleSave={handleClickSave}/>
    <CategorySaved handleRemove={handleClickRemove} savedCourse={savedCourse}/>
    </>
  );
}
