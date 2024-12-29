import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  skills = [
    {
      category: "Technology",
      content: [
        { name: "C#", percentage: "90%", },
          { name: "C++", percentage: "70%", },
        { name: "HTML", percentage: "80%", },
        { name: "CSS", percentage: "80%", },
          { name: "Angular", percentage: "80%", },
          { name: "JavaScript", percentage: "60%", },
        { name: "Python", percentage: "30%", },
        { name: "Arduino", percentage: "30%", },
      ]
    },
    {
      category: "Software",
      content: [
        { name: "Unity", percentage: "90%", },
        { name: "Visual Studio", percentage: "90%", },
        { name: "Android Studio", percentage: "70%", },
        { name: "PyTorch", percentage: "20%", },
          { name: "Matlab", percentage: "20%", },
        { name: "Gimp", percentage: "40%", },
        { name: "Git", percentage: "90%", },
      ]
    },
    {
      category: "Design",
      content: [
          { name: "Figma", percentage: "90%", },
        { name: "Canva", percentage: "70%", },
      ]
    },
    {
      category: "XR Technology",
      content: [
          { name: "Oculus Quest", percentage: "90%", },
      ]
    },
    {
      category: "Research",
      content: [
        { name: "Usability Testing", percentage: "90%", },
        { name: "Design Thinking", percentage: "80%", },
          { name: "Accessibility", percentage: "70%", },
        { name: "Interviews", percentage: "70%", },
      ]
    },
    {
      category: "Business",
      content: [
        { name: "Innovation Development & Management", percentage: "80%", },
          { name: "Business Modelling", percentage: "90%", },
      ]
    }
  ]
}
