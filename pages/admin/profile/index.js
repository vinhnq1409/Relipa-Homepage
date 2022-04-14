import React from 'react'
import Admin from 'layouts/Admin.js'
import GridItem from 'components/Grid/GridItem.js'
import GridContainer from 'components/Grid/GridContainer.js'
import Button from 'components/CustomButtons/Button.js'
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import CardAvatar from 'components/Card/CardAvatar.js'
import CardBody from 'components/Card/CardBody.js'
import CardFooter from 'components/Card/CardFooter.js'
import TextField from '@material-ui/core/TextField'
import { useForm } from 'react-hook-form'
import avatar from 'assets/img/faces/marc.jpg'
import { useSelector } from 'react-redux'

function UserProfile() {
  const { infoUser, loading } = useSelector((state) => state.userInfo)

  const {
    register,
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
  }

  return (
    <>
      {loading ? (
        'loading'
      ) : (
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Card>
                <CardHeader color='primary'>
                  <h4>My Profile</h4>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        name='email'
                        {...register('email', { required: true })}
                        label='Email'
                        type='email'
                        id='email'
                        disabled
                        defaultValue={infoUser?.email}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        name='name'
                        {...register('name', { required: true })}
                        label='User name'
                        type='text'
                        id='name'
                        disabled
                        defaultValue={infoUser?.name}
                      />
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <CardFooter>
                  <Button disabled type='submit' color='primary'>Update Profile</Button>
                </CardFooter>
              </Card>
              </form>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card profile>
                <CardAvatar profile>
                  <a href='#pablo' onClick={(e) => e.preventDefault()}>
                    <img src={avatar} alt='...' />
                  </a>
                </CardAvatar>
                <CardBody profile>
                  <h4>{infoUser?.name}</h4>
                  <h3>{infoUser?.email}</h3>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      )}
    </>
  )
}

UserProfile.layout = Admin

export default UserProfile
