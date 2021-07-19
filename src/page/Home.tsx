import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useForm, SubmitHandler } from 'react-hook-form'

import { useSelector } from 'react-redux'
import { postApplication } from '../store/applicationSlice'
import { RootState, useAppThunkDispatch } from '../store'

import { Input, Button, ErrorMessage } from '../components'
import { DropdownBtn, MenuItem, Menu } from '../components/Dropdown'

import cities from '../lib/api/cities.json'
import sources from '../lib/api/sources.json'
import arrow from '../assets/image/down_arrow.png'
import logo from '../assets/image/logo.png'

export interface IFormValue {
  name: string
  phone: string
  email: string
  link: string
  city: string
  organization: string
  recipient: string
  where: string
}

// container
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  // responsive
  @media (max-width: ${props => props.theme.screens['2xl']}) {
    padding: 100px 50px;
  }
`
// inner-container
const InnerContainer = styled.div`
  max-width: 1440px;
  width: 1440px;
  padding: 60px 0;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 60px;
  justify-content: space-between;
  align-items: center;
`

// left-content-container
const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

// logo
const Logo = styled.img`
  margin-bottom: 40px;
  width: 474.46px;
  height: 70px;
`
// heading
const SubTitle = styled.div`
  color: ${props => props.theme.colors.text.default};
  font-family: ${props => props.theme.fontFamily.sans[15]};
  font-weight: ${props => props.theme.fontWeight.semibold};
  font-size: ${props => props.theme.fontSize['2xl'][0]};
  margin-bottom: 24px;
`
// paragraph
const Paragraph = styled.p`
  line-height: 21px;
  font-size: ${props => props.theme.fontSize.sm[0]};
  font-family: ${props => props.theme.fontFamily.sans[14]};
  font-weight: ${props => props.theme.fontWeight.normal};
  color: ${props => props.theme.colors.text.default};
`
// highlight
const Highlight = styled.span`
  color: ${props => props.theme.colors.primary.default};
`

//////////////////////////////
// right-content-container
const RightContent = styled.div`
  width: 440px;
  box-shadow: ${props => props.theme.boxShadow.DEFAULT};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: 40px 30px;
`

// two column grid
const TwoColumnTwoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  column-gap: 20px;
  width: 100%;
  margin-bottom: 25px;
`
// additional field
const AdditionalField = styled.div`
  color: ${props => props.theme.colors.text.default};
  font-family: ${props => props.theme.fontFamily.sans[14]};
  font-size: ${props => props.theme.fontSize.sm[0]};
  margin: 25px 0;
  cursor: pointer;
`
// 이건 재사용해야할까?
const StyledArrow = styled.img<{ isListOpen?: boolean }>`
  transform: ${props => (props.isListOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  /* transition: transform 0.3s linear; */
  margin-left: 8px;
`
const Home: React.FC = () => {
  // use Dispatch
  const dispatch = useAppThunkDispatch()
  const { loading } = useSelector((state: RootState) => state.application)
  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    getValues,
    trigger,
    reset,
  } = useForm<IFormValue>({ mode: 'onChange', reValidateMode: 'onChange' })

  // cities drop-down toggle state
  const [isCitiesListOpen, OpenCitiesList] = useState(false)
  // additional field drop-down state
  const [isAdditionalFieldOpen, OpenAdditionalField] = useState(false)
  // source drop-down toggle state
  const [isSourceListOpen, OpenSourceList] = useState(false)

  useEffect(() => {
    register('city', {
      required: true,
    })
  }, [register])

  // !!!!!!!-Submit-!!!!!!!
  const onSubmit: SubmitHandler<IFormValue> = data => {
    dispatch(postApplication(data))
      .unwrap()
      .then(() => {
        reset({
          name: '',
          phone: '',
          email: '',
          link: '',
          city: '',
          organization: '',
          recipient: '',
          where: '',
        })
      })
  }
  return (
    <Container>
      <InnerContainer>
        {/* Left Side */}
        <LeftContent>
          <Logo src={logo}></Logo>
          <SubTitle>Оставьте заявку и станьте частью нашей команды</SubTitle>
          <div>
            <Paragraph>
              Компания SK Design приглашает к взаимовыгодному сотрудничеству креативных дизайнеров,
              архитекторов и декораторов, дизайн-бюро и интерьерные студии — все, кто дизайн
              интерьера сделали своим призванием.
            </Paragraph>
            <Paragraph>
              Партнерство мы видим как доверительные отношения, основанные на честности реализации
              бизнес идей в сфере создания и продаж современной, качественной, удобной,
              функциональной и эксклюзивной мебели.
            </Paragraph>
            <Paragraph>
              Ознакомиться с проектами можете в нашем <Highlight>портфолио</Highlight>. Если Вы
              оформляете интерьеры жилых или коммерческих помещений — мы с радостью поможем Вам:
              составим уникальные условия сотрудничества, предоставим 3D модели (уточняйте у
              менеджеров) и разработаем коммерческое предложение к Вашему проекту или изображениям.
            </Paragraph>
          </div>
        </LeftContent>

        {/* Right Side */}
        <RightContent>
          <TwoColumnTwoRow>
            {/* Name Field*/}
            <Input
              placeholder='Иван'
              label='Ваше имя *'
              name='name'
              register={register}
              rules={{
                required: { value: true, message: 'поле должно быть не пустое' },
                minLength: { value: 2, message: 'поле должно имеет 2 или более символов' },
              }}
              error={errors.name ? true : false}
            ></Input>
            {/* Phone Number Field */}
            <Input
              placeholder='+7 (000) 000-00-00'
              label='Номер телефона *'
              name='phone'
              register={register}
              error={errors.phone ? true : false}
              rules={{
                required: { value: true, message: 'поле должно быть не пустое' },
                pattern: {
                  value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                  message: 'номер должен быть заполнен корректно и полностью',
                },
              }}
            ></Input>
            <div>
              {/* -Name- "поле не пустое" Error Message */}
              {errors.name?.type === 'required' && (
                <ErrorMessage>{errors.name?.message}</ErrorMessage>
              )}
              {/* -Name- "поле имеет 2 или более символов" Error Message */}
              {errors.name?.type === 'minLength' && (
                <ErrorMessage>{errors.name?.message}</ErrorMessage>
              )}
            </div>
            <div>
              {/* -Phone-  "поле не пустое" Error Message */}
              {errors.phone?.type === 'required' && (
                <ErrorMessage>{errors.phone?.message}</ErrorMessage>
              )}
              {/* -Phone-  "номер заполнен корректно и полностью" Error Message */}
              {errors.phone?.type === 'pattern' && (
                <ErrorMessage>{errors.phone?.message}</ErrorMessage>
              )}
            </div>
          </TwoColumnTwoRow>
          <TwoColumnTwoRow>
            {/* E-mail Field */}
            <Input
              placeholder='example@skdesign.ru'
              label='E-mail *'
              name='email'
              register={register}
              error={errors.email ? true : false}
              rules={{
                required: { value: true, message: 'поле должно быть не пустое' },
                pattern: {
                  value:
                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                  message: 'email должен быть заполнен корректно и полностью',
                },
              }}
            ></Input>
            {/* Profile Link Field */}
            <Input
              placeholder='instagram.com/skdesign'
              label='Ссылка на профиль *'
              name='link'
              error={errors.link ? true : false}
              register={register}
              rules={{
                required: { value: true, message: 'поле должно быть не пустое' },
                minLength: { value: 3, message: 'поле должно имеет 3 или более символов' },
              }}
            ></Input>
            <div>
              {/* -Email- "поле не пустое" Error Message */}
              {errors.email?.type === 'required' && (
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
              )}
              {/* -Email- "заполнен корректно и полностью" Error Message */}
              {errors.email?.type === 'pattern' && (
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
              )}
            </div>
            <div>
              {/* -Profile Link- "поле не пустое" Error Message */}
              {errors.link?.type === 'required' && (
                <ErrorMessage>{errors.link?.message}</ErrorMessage>
              )}
              {/* -Profile Link- "поле имеет 3 или более символов" Error Message */}
              {errors.link?.type === 'minLength' && (
                <ErrorMessage>{errors.link?.message}</ErrorMessage>
              )}
            </div>
          </TwoColumnTwoRow>
          <div style={{ marginBottom: '25px', position: 'relative' }}>
            {/* City */}
            <DropdownBtn
              label='Выберите город *'
              isListOpen={isCitiesListOpen}
              selected={getValues('city')}
              onClick={() => OpenCitiesList(!isCitiesListOpen)}
              error={errors.city ? true : false}
            ></DropdownBtn>
            {/* -City- "поле не пустое" Error Message */}
            {errors.city?.type === 'required' && (
              <ErrorMessage>поле должно быть не пустое</ErrorMessage>
            )}
            {isCitiesListOpen && (
              <Menu>
                {cities.map((city, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      setValue('city', city.name)
                      trigger('city')
                      OpenCitiesList(!isCitiesListOpen) // close drop down
                    }}
                  >
                    {city.name}
                  </MenuItem>
                ))}
              </Menu>
            )}
          </div>
          {/* Organization */}
          <Input
            label='Название организации/студии'
            name='organization'
            placeholder='SK Design'
            register={register}
          ></Input>
          <AdditionalField onClick={() => OpenAdditionalField(!isAdditionalFieldOpen)}>
            {isAdditionalFieldOpen ? 'Скрыть дополнительные поля' : 'Показать дополнительные поля'}
            <StyledArrow src={arrow} isListOpen={isAdditionalFieldOpen}></StyledArrow>
          </AdditionalField>
          {isAdditionalFieldOpen && (
            <div style={{ marginBottom: '25px' }}>
              {/* Recipient */}
              <Input
                label='Получатель'
                name='recipient'
                placeholder='ФИО'
                register={register}
              ></Input>
            </div>
          )}
          {isAdditionalFieldOpen && (
            <div style={{ marginBottom: '25px', position: 'relative' }}>
              {/* Where did you hear about us from? */}
              <DropdownBtn
                label='От куда узнали про нас?'
                isListOpen={isSourceListOpen}
                selected={getValues('where')}
                onClick={() => OpenSourceList(!isSourceListOpen)}
              ></DropdownBtn>
              {isSourceListOpen && (
                <Menu>
                  {sources.map((source, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => {
                        setValue('where', source)
                        OpenSourceList(!isSourceListOpen)
                      }}
                    >
                      {source}
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </div>
          )}
          <Button disabled={!isValid || loading} onClick={handleSubmit(onSubmit)} loading={loading}>
            Отправить заявку
          </Button>
        </RightContent>
      </InnerContainer>
    </Container>
  )
}
export default Home
