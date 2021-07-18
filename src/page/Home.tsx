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
  'Ваше имя *': string
  'Номер телефона *': string
  'E-mail *': string
  'Ссылка на профиль *': string
  'Выберите город *': string
  'Название организации/студии': string
  Получатель: string
  'От куда узнали про нас?': string
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
    register('Выберите город *', {
      required: true,
    })
  }, [register])

  // !!!!!!!-Submit-!!!!!!!
  const onSubmit: SubmitHandler<IFormValue> = data => {
    dispatch(postApplication(data))
      .unwrap()
      .then(() => {
        reset({
          'Ваше имя *': '',
          'Номер телефона *': '',
          'E-mail *': '',
          'Ссылка на профиль *': '',
          'Выберите город *': '',
          'Название организации/студии': '',
          Получатель: '',
          'От куда узнали про нас?': '',
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
              register={register}
              rules={{
                required: { value: true, message: 'поля должна не пустое' },
                minLength: { value: 2, message: 'поле имеет 2 или более символов' },
              }}
              error={errors['Ваше имя *']?.message}
            ></Input>
            {/* Phone Number Field */}
            <Input
              placeholder='+7 (000) 000-00-00'
              label='Номер телефона *'
              register={register}
              error={errors['Номер телефона *']?.message}
              rules={{
                required: { value: true, message: 'поля должна не пустое' },
                pattern: {
                  value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                  message: 'номер заполнен корректно и полностью',
                },
              }}
            ></Input>
            <div>
              {/* -Name- "поле не пустое" Error Message */}
              {errors['Ваше имя *']?.type === 'required' && (
                <ErrorMessage>{errors['Ваше имя *']?.message}</ErrorMessage>
              )}
              {/* -Name- "поле имеет 2 или более символов" Error Message */}
              {errors['Ваше имя *']?.type === 'minLength' && (
                <ErrorMessage>{errors['Ваше имя *']?.message}</ErrorMessage>
              )}
            </div>
            <div>
              {/* -Phone-  "поле не пустое" Error Message */}
              {errors['Номер телефона *']?.type === 'required' && (
                <ErrorMessage>{errors['Номер телефона *']?.message}</ErrorMessage>
              )}
              {/* -Phone-  "номер заполнен корректно и полностью" Error Message */}
              {errors['Номер телефона *']?.type === 'pattern' && (
                <ErrorMessage>{errors['Номер телефона *']?.message}</ErrorMessage>
              )}
            </div>
          </TwoColumnTwoRow>
          <TwoColumnTwoRow>
            {/* E-mail Field */}
            <Input
              placeholder='example@skdesign.ru'
              label='E-mail *'
              register={register}
              error={errors['E-mail *']?.message}
              rules={{
                required: { value: true, message: 'поля должна не пустое' },
                pattern: {
                  value:
                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                  message: 'заполнен корректно и полностью',
                },
              }}
            ></Input>
            {/* Profile Link Field */}
            <Input
              placeholder='instagram.com/skdesign'
              label='Ссылка на профиль *'
              error={errors['Ссылка на профиль *']?.message}
              register={register}
              rules={{
                required: { value: true, message: 'поля должна не пустое' },
                minLength: { value: 3, message: 'поле имеет 3 или более символов' },
              }}
            ></Input>
            <div>
              {/* -Email- "поле не пустое" Error Message */}
              {errors['E-mail *']?.type === 'required' && (
                <ErrorMessage>{errors['E-mail *']?.message}</ErrorMessage>
              )}
              {/* -Email- "заполнен корректно и полностью" Error Message */}
              {errors['E-mail *']?.type === 'pattern' && (
                <ErrorMessage>{errors['E-mail *']?.message}</ErrorMessage>
              )}
            </div>
            <div>
              {/* -Profile Link- "поле не пустое" Error Message */}
              {errors['Ссылка на профиль *']?.type === 'required' && (
                <ErrorMessage>{errors['Ссылка на профиль *']?.message}</ErrorMessage>
              )}
              {/* -Profile Link- "поле имеет 3 или более символов" Error Message */}
              {errors['Ссылка на профиль *']?.type === 'minLength' && (
                <ErrorMessage>{errors['Ссылка на профиль *']?.message}</ErrorMessage>
              )}
            </div>
          </TwoColumnTwoRow>
          <div style={{ marginBottom: '25px', position: 'relative' }}>
            {/* City */}
            <DropdownBtn
              label='Выберите город *'
              isListOpen={isCitiesListOpen}
              selected={getValues('Выберите город *')}
              onClick={() => OpenCitiesList(!isCitiesListOpen)}
              error={errors['Выберите город *']?.message}
            ></DropdownBtn>
            {/* -City- "поле не пустое" Error Message */}
            {errors['Выберите город *']?.type === 'required' && (
              <ErrorMessage>поля должна не пустое</ErrorMessage>
            )}
            {isCitiesListOpen && (
              <Menu>
                {cities.map((city, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      setValue('Выберите город *', city.name)
                      trigger('Выберите город *')
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
            placeholder='SK Design'
            register={register}
          ></Input>
          <AdditionalField onClick={() => OpenAdditionalField(!isAdditionalFieldOpen)}>
            Показать дополнительные поля
            <StyledArrow src={arrow} isListOpen={isAdditionalFieldOpen}></StyledArrow>
          </AdditionalField>
          {isAdditionalFieldOpen && (
            <div style={{ marginBottom: '25px' }}>
              {/* Recipient */}
              <Input label='Получатель' placeholder='ФИО' register={register}></Input>
            </div>
          )}
          {isAdditionalFieldOpen && (
            <div style={{ marginBottom: '25px', position: 'relative' }}>
              {/* Where did you hear about us from? */}
              <DropdownBtn
                label='От куда узнали про нас?'
                isListOpen={isSourceListOpen}
                selected={getValues('От куда узнали про нас?')}
                onClick={() => OpenSourceList(!isSourceListOpen)}
              ></DropdownBtn>
              {isSourceListOpen && (
                <Menu>
                  {sources.map((source, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => {
                        setValue('От куда узнали про нас?', source)
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
// 에러시 라벨 색 제대로 렌더링 되도록 고치기
