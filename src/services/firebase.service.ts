import { collection, getDocs, query, DocumentData, orderBy } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { JobData } from '../types/JobExperience';
import { getCompanyLogo } from '../utils/logoMapping';

export interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
  imageUrl?: string;
}

class FirebaseService {
  async getJobExperiences(): Promise<JobData[]> {
    try {
      const jobsCollection = collection(db, 'job_experience');
      const jobsQuery = query(jobsCollection, orderBy("sortOrder"));
      const querySnapshot = await getDocs(jobsQuery);
      
      if (querySnapshot.empty) {
        console.log('No job experiences found');
        return [];
      }

      return querySnapshot.docs.map(doc => {
        const data = doc.data();
        console.log('Document data:', data);
        return {
          id: doc.id,
          company: data.company,
          position: data.position,
          period: data.period,
          description: data.description,
          logo: getCompanyLogo(data.company)
        } as JobData;
      });
    } catch (error) {
      console.error('Error fetching job experiences:', error);
      throw error;
    }
  }

  async getProjects(): Promise<Project[]> {
    try {
      const projectsCollection = collection(db, 'projects');
      const projectsQuery = query(projectsCollection);
      const querySnapshot = await getDocs(projectsQuery);
      
      if (querySnapshot.empty) {
        console.log('No projects found');
        return [];
      }

      return querySnapshot.docs.map(doc => {
        const data = doc.data();
        console.log('Project data:', data);
        return {
          id: doc.id,
          title: data.title,
          description: data.description,
          link: data.link,
          imageUrl: data.imageUrl
        } as Project;
      });
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  }
}

export const firebaseService = new FirebaseService(); 