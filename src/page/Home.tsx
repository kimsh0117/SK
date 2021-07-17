import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/image/logo.png'
import { Input, Button } from '../components'
import { DropdownBtn, MenuItem, Menu } from '../components/Dropdown'
import cities from '../lib/api/cities.json'
import sources from '../lib/api/sources.json'
import arrow from '../assets/image/down_arrow.png'

// container
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  @media (max-width: ${props => props.theme.screens['2xl']}) {
    padding: 0 50px;
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
const TwoColumnRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  // additional field state
  const [isAdditionalFieldOpen, OpenAdditionalField] = useState(false)
  // additional field method
  const toggleAdditionalFieldDropdown = (): void => {
    OpenAdditionalField(!isAdditionalFieldOpen)
  }

  // cities drop-down toggle state
  const [isCitiesListOpen, OpenCitiesList] = useState(false)
  const toggleCitiesDropdown = (): void => {
    OpenCitiesList(!isCitiesListOpen)
  }

  // cities drop-down selected state
  const [selectedCity, setCitiesItem] = useState<string | null>(null)
  const selectCitiesItem = (item: string): void => {
    setCitiesItem(item)
    OpenCitiesList(!isCitiesListOpen)
  }

  // source drop-down toggle state
  const [isSourceListOpen, OpenSourceList] = useState(false)
  const toggleSourceDropdown = (): void => {
    OpenSourceList(!isSourceListOpen)
  }

  // source drop-down selected state
  const [selectedSource, setSourceItem] = useState<string | null>(null)
  const selectSourceItem = (item: string): void => {
    setSourceItem(item)
    OpenSourceList(!isSourceListOpen)
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
          <TwoColumnRow>
            <Input placeholder='Иван' label='Ваше имя *'></Input>
            <Input placeholder='+7 (000) 000-00-00' label='Номер телефона *'></Input>
          </TwoColumnRow>
          <TwoColumnRow>
            <Input placeholder='example@skdesign.ru' label='E-mail *'></Input>
            <Input placeholder='instagram.com/skdesign' label='Ссылка на профиль *'></Input>
          </TwoColumnRow>
          <div style={{ marginBottom: '25px', position: 'relative' }}>
            <DropdownBtn
              label='Выберите город *'
              isListOpen={isCitiesListOpen}
              selected={selectedCity}
              onClick={toggleCitiesDropdown}
            ></DropdownBtn>
            {isCitiesListOpen && (
              <Menu>
                {cities.map((city, index) => (
                  <MenuItem key={index} onClick={() => selectCitiesItem(city.name)}>
                    {city.name}
                  </MenuItem>
                ))}
              </Menu>
            )}
          </div>
          <Input label='Название организации/студии' placeholder='SK Design'></Input>
          <AdditionalField onClick={toggleAdditionalFieldDropdown}>
            Показать дополнительные поля
            <StyledArrow src={arrow} isListOpen={isAdditionalFieldOpen}></StyledArrow>
          </AdditionalField>
          {isAdditionalFieldOpen && (
            <div style={{ marginBottom: '25px' }}>
              <Input label='Полуучатель' placeholder='ФИО'></Input>
            </div>
          )}
          {isAdditionalFieldOpen && (
            <div style={{ marginBottom: '25px', position: 'relative' }}>
              <DropdownBtn
                label='От куда узнали про нас?'
                isListOpen={isSourceListOpen}
                selected={selectedSource}
                onClick={toggleSourceDropdown}
              ></DropdownBtn>
              {isSourceListOpen && (
                <Menu>
                  {sources.map((source, index) => (
                    <MenuItem key={index} onClick={() => selectSourceItem(source)}>
                      {source}
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </div>
          )}
          <Button disabled={true}>Отправить заявку</Button>
        </RightContent>
      </InnerContainer>
    </Container>
  )
}
export default Home
// 현재 크롬에서만 오픈 산스 적용 됨
// 다른 사파리, 파이어폭스에서 적용 되도록 다운 및 적용해야 함
