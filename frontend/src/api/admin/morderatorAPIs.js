import { async } from "@firebase/util";
import { fakeCallApi } from "../fakeCallApi";

let moderators = [
    {
     fullName: "fullName 1",
     phone: 23,
     address: "address 1",
     avatarURL: "avatarURL 1",
     dateOfBirth: "2020/02/14",
     email: "email 1",
     roleId: 2,
     status: "enable",
     id: 1
    },
    {
     fullName: "fullName 2",
     phone: 70,
     address: "address 2",
     avatarURL: "avatarURL 2",
     dateOfBirth: "2020/02/14",
     email: "email 2",
     roleId: 3,
     status: "disable",
     id: 2
    },
    {
     fullName: "fullName 3",
     phone: 13,
     address: "address 3",
     avatarURL: "avatarURL 3",
     dateOfBirth: "2020/02/14",
     email: "email 3",
     roleId: 4,
     status: "disable",
     id: 3
    },
    {
     fullName: "fullName 4",
     phone: 29,
     address: "address 4",
     avatarURL: "avatarURL 4",
     dateOfBirth: "2020/02/14",
     email: "email 4",
     roleId: 2,
     status: "enable",
     id: 4
    }
   ]
   
export const getModerators = async () => {
	await fakeCallApi(100);
	return moderators ? moderators : [];
};

export const getModeratorByID = async (id) => {
	await fakeCallApi(100);
	return moderators.find((mod) => mod.id == id);
};

export   const searchModApi = async (value) => {
      await fakeCallApi(100);
     return moderators.filter((mod) => mod.fullName.includes(value));
}


export  const createModeratorApi = async (mod) =>{
        await fakeCallApi(100);
        const id = moderators.length + 2;
        let newMod = {...mod, id: id, status: "enable"}
        moderators = [newMod, ...moderators];
   }

 export  const updateModeratorApi = async (id, mod ) => {
        let index = await moderators.indexOf(getModeratorByID(id));
        if(index !== -1) moderators.splice(index, 1, mod);
   }

export  const disableModeratorApi = async (id) => {
         await fakeCallApi(100);
        for(let mod of moderators){
           if(mod.id === id) {
            mod.status = 'disable';
            break;
           }
        }
   }
