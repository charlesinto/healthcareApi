import { executeQuery, generatePasswordHash } from "../helper"
import { isPasswordEqualHashPassword, assignToken } from "../helper";

export const loginWithEmailAndPassword = async (req, res) => {
    try{
        const result = await executeQuery('Select * from users where emailAddress = $1',[req.body.email] )
        if(result.length <= 0) return res.status(404).send({message:'Email Addreess or Password do not exist'})
        if(!isPasswordEqualHashPassword(result[0].password, req.body.password)) return res.status(404).send({message:'Email Addreess or Password do not exist'})
        const token = await assignToken({email: result[0].emailaddress,roleid: result[0].roleid})
        res.status(200).send({message:'Login Successful', email: req.body.email, roleid:result[0].roleid, token})
    }catch(error){
        res.status(500).send({message:'some erros were encountered'})
    }
}

export const signUpUser = async (req, res) => {
    try{
        const {firstName, lastName, phoneNumber, roleId, password, emailAddress} = req.body;
        const result = await executeQuery('select * from users where emailAddress =$1', [emailAddress]);
        if(result.length > 0) return res.status(400).send({message:'User with the Email alredy exists'})
        await executeQuery(`insert into users(firstname, lastname, phonenumber, roleid, password, emailaddress)
        values ($1,$2, $3,$4,$5,$6)` , [firstName, lastName, phoneNumber, roleId, generatePasswordHash(password), emailAddress])
        res.status(201).send({message:'User created successfully'});
    }catch(error){
        res.status(500).send({message:'some erros were encountered', error})
    }
}

export const getUsers = async (req, res) => {
    try{
        const result = await executeQuery(`select a.firstname,a.lastname,b.roleid,a.rolename,b.active,b.datecreated,b.active from users a left join roles b on a.roleid = b.id`)
        res.status(200).send({message:'Users fetched successfully', result})
    }catch(error){
        res.status(500).send({message:'some erros were encountered', error})
    }
}

export const getRoles = async (req, res) => {
    try{
        const result = await executeQuery('select * from roles')
        res.status(200).send({message:'Roles fetched successfully', result})
    }catch(error){
        res.status(500).send({message:'some erros were encountered', error})
    }
}

