# 11.1.0 "protoplasm-phantasm" (2021-01-20)

### cdk

|            |                       |
| ---------- | --------------------- |
| bug fix |  **overlay:** sub-pixel deviations throwing off positioning in some cases ([#21427](https://github.com/angular/components/issues/21427)) ([5900d70cc65882307a8ef374bd1d41e228c8d5c7](https://github.com/angular/components/commit/5900d70cc65882307a8ef374bd1d41e228c8d5c7)), closes [#21350](https://github.com/angular/components/issues/21350) |
| bug fix |  **a11y:** focusVia not accounting for focused child node ([#21512](https://github.com/angular/components/issues/21512)) ([f8df9f86d1abd03d0824bac321fd01031e0c9836](https://github.com/angular/components/commit/f8df9f86d1abd03d0824bac321fd01031e0c9836)), closes [#20966](https://github.com/angular/components/issues/20966) [#21500](https://github.com/angular/components/issues/21500) |
| bug fix |  **a11y:** set AriaDescriber messages container to visibility:hidden ([#21186](https://github.com/angular/components/issues/21186)) ([2e7407c0c59fc0437ccbce49f9152922c961e7ce](https://github.com/angular/components/commit/2e7407c0c59fc0437ccbce49f9152922c961e7ce)) |
| bug fix |  **drag-drop:** account for enterPredicate when setting receiving class ([#21346](https://github.com/angular/components/issues/21346)) ([411b1747df587243f7d70f8e5a7cc75a753d1b7d](https://github.com/angular/components/commit/411b1747df587243f7d70f8e5a7cc75a753d1b7d)), closes [#21171](https://github.com/angular/components/issues/21171) |
| bug fix |  **drag-drop:** don't block scrolling if it happens before delay has elapsed ([#21382](https://github.com/angular/components/issues/21382)) ([eb318d938279357272c7fc2b99d627e16e80835c](https://github.com/angular/components/commit/eb318d938279357272c7fc2b99d627e16e80835c)), closes [#17923](https://github.com/angular/components/issues/17923) |
| bug fix |  **drag-drop:** don't stop event propagation unless nested ([#21227](https://github.com/angular/components/issues/21227)) ([e42d502f89b455c23a4f2c6e0fe39ab255b9bd57](https://github.com/angular/components/commit/e42d502f89b455c23a4f2c6e0fe39ab255b9bd57)), closes [#19334](https://github.com/angular/components/issues/19334) [#19333](https://github.com/angular/components/issues/19333) |
| bug fix |  **overlay:** block scroll strategy throwing off scroll behavior feature detection ([#17223](https://github.com/angular/components/issues/17223)) ([f940d344b5c6c5ecaa4886285eaaba73f3f6b737](https://github.com/angular/components/commit/f940d344b5c6c5ecaa4886285eaaba73f3f6b737)), closes [#17221](https://github.com/angular/components/issues/17221) |
| bug fix |  **scrolling:** Prevents NaN being returned as firstVisibleIndex. ([#21505](https://github.com/angular/components/issues/21505)) ([390afca4bd9b54ee40b9d24b30b7a51db219ea37](https://github.com/angular/components/commit/390afca4bd9b54ee40b9d24b30b7a51db219ea37)) |
| bug fix |  **scrolling:** virtual scroll not picking up trackBy function when items come in after init ([#21335](https://github.com/angular/components/issues/21335)) ([43081d9d094aa93b702090a2ca142216466b975a](https://github.com/angular/components/commit/43081d9d094aa93b702090a2ca142216466b975a)), closes [#21281](https://github.com/angular/components/issues/21281) |
| bug fix |  **tree:** add missing generic types to trackBy ([#21421](https://github.com/angular/components/issues/21421)) ([22d5600aab931dba65f4ef9cb0a31d7ca69a486a](https://github.com/angular/components/commit/22d5600aab931dba65f4ef9cb0a31d7ca69a486a)), closes [#21364](https://github.com/angular/components/issues/21364) |
| feature |  **a11y:** support setting a role through AriaDescriber ([fec67cd9ba7de1f79a76c1763c501cf4ef2a65fe](https://github.com/angular/components/commit/fec67cd9ba7de1f79a76c1763c501cf4ef2a65fe)), closes [#20593](https://github.com/angular/components/issues/20593) |
| feature |  **drag-drop:** support configurable scroll speed ([#21400](https://github.com/angular/components/issues/21400)) ([e65ead8436dd8a93ae719008cc3cd6798d13ada8](https://github.com/angular/components/commit/e65ead8436dd8a93ae719008cc3cd6798d13ada8)), closes [#19401](https://github.com/angular/components/issues/19401) |
| feature |  **scrolling:** update ScrollDispatcher to allow HTMLElement parameters ([#21201](https://github.com/angular/components/issues/21201)) ([ddc2e23e8e0e93b236e2c484ce8fb50b7a98d90e](https://github.com/angular/components/commit/ddc2e23e8e0e93b236e2c484ce8fb50b7a98d90e)) |
| feature |  **table:** Emit CSS classes on sticky elements that border non-sticky elements ([#21179](https://github.com/angular/components/issues/21179)) ([764863278b237804e009c6aa70943465bd3d9602](https://github.com/angular/components/commit/764863278b237804e009c6aa70943465bd3d9602)) |
| feature |  **testing:** allow for data to be attached to custom event ([#20764](https://github.com/angular/components/issues/20764)) ([f99d0dd62c30098bd748f4fc32987ee82229c3f7](https://github.com/angular/components/commit/f99d0dd62c30098bd748f4fc32987ee82229c3f7)) |
| feature |  **testing:** support modifiers for clicking on a TestElement ([#20758](https://github.com/angular/components/issues/20758)) ([e70e5dd307f586f7c95377e00dc158c2e4dfde61](https://github.com/angular/components/commit/e70e5dd307f586f7c95377e00dc158c2e4dfde61)) |
| performance |  **testing:** reduce change detections when running parallel actions ([#21071](https://github.com/angular/components/issues/21071)) ([43997571da4d599815d8bc4bb366f398f8652db7](https://github.com/angular/components/commit/43997571da4d599815d8bc4bb366f398f8652db7)) |

### material

|            |                       |
| ---------- | --------------------- |
| bug fix |  **autocomplete:** activate first enabled option with autoActiveFirstOption ([#21513](https://github.com/angular/components/issues/21513)) ([032c317d40e7d073755b769674effaf21f9e8944](https://github.com/angular/components/commit/032c317d40e7d073755b769674effaf21f9e8944)), closes [#21498](https://github.com/angular/components/issues/21498) |
| bug fix |  **button:** anchor mat-icon-button as matSuffix focus misaligned ([#21117](https://github.com/angular/components/issues/21117)) ([55253abd3f2cd17686702827a47f98e5132e54a5](https://github.com/angular/components/commit/55253abd3f2cd17686702827a47f98e5132e54a5)), closes [#20949](https://github.com/angular/components/issues/20949) [#20949](https://github.com/angular/components/issues/20949) |
| bug fix |  **menu:** focus indication rendering partially in high contrast mode ([#21527](https://github.com/angular/components/issues/21527)) ([e180655270b9639965af1e8a9d963a9aec1f7f59](https://github.com/angular/components/commit/e180655270b9639965af1e8a9d963a9aec1f7f59)), closes [#21524](https://github.com/angular/components/issues/21524) |
| bug fix |  **radio:** remove tabindex from host node ([#21280](https://github.com/angular/components/issues/21280)) ([d17883c5d49cb53bf40c9ff0894b16008a50e73c](https://github.com/angular/components/commit/d17883c5d49cb53bf40c9ff0894b16008a50e73c)), closes [#21046](https://github.com/angular/components/issues/21046) [#21266](https://github.com/angular/components/issues/21266) |
| bug fix |  **snack-bar:** fix Firefox/JAWS not reading out snackbar message ([#21552](https://github.com/angular/components/issues/21552)) ([f76369ab71a6dd807705ce42c104ecc48a97aef3](https://github.com/angular/components/commit/f76369ab71a6dd807705ce42c104ecc48a97aef3)) |
| bug fix |  **tabs:** background color inherited to nested groups ([#21533](https://github.com/angular/components/issues/21533)) ([934f7eb15a40f24aa3e36acfa7a5bf171dcca1e3](https://github.com/angular/components/commit/934f7eb15a40f24aa3e36acfa7a5bf171dcca1e3)), closes [#14819](https://github.com/angular/components/issues/14819) [#21530](https://github.com/angular/components/issues/21530) |
| bug fix |  **tooltip:** not closing when clicking outside using auxiliary button ([#21467](https://github.com/angular/components/issues/21467)) ([01cbebe744b7fcebf2f0b0d32f54788d26a743ee](https://github.com/angular/components/commit/01cbebe744b7fcebf2f0b0d32f54788d26a743ee)) |
| bug fix |  **autocomplete:** not closing when clicking outside using auxilliary button ([#21397](https://github.com/angular/components/issues/21397)) ([bed1a6fb8f7a3e3e580166a91e7ef54934a9e695](https://github.com/angular/components/commit/bed1a6fb8f7a3e3e580166a91e7ef54934a9e695)) |
| bug fix |  **autocomplete:** options inside groups not read out with VoiceOver ([#20819](https://github.com/angular/components/issues/20819)) ([3866761c9545105f55e91629881315646cebdddb](https://github.com/angular/components/commit/3866761c9545105f55e91629881315646cebdddb)) |
| bug fix |  **core:** unable to distinguish disabled mat-option in high contrast mode ([#21484](https://github.com/angular/components/issues/21484)) ([e608da306d1cd5ad97d47b0ace5bcdb87c982a49](https://github.com/angular/components/commit/e608da306d1cd5ad97d47b0ace5bcdb87c982a49)) |
| bug fix |  **datepicker:** a couple of accessibility issues in touch UI mode ([#21228](https://github.com/angular/components/issues/21228)) ([f7bd2242ef0dce97f8a8ad6fd32e16e67fe9feca](https://github.com/angular/components/commit/f7bd2242ef0dce97f8a8ad6fd32e16e67fe9feca)) |
| bug fix |  **datepicker:** adjust focused date background for better visibility ([#21176](https://github.com/angular/components/issues/21176)) ([dfe3236ce45f5d79dce7130de817ccb737e47e13](https://github.com/angular/components/commit/dfe3236ce45f5d79dce7130de817ccb737e47e13)) |
| bug fix |  **datepicker:** range input controls dirty on init ([#21223](https://github.com/angular/components/issues/21223)) ([4b160255021a141a619fbfa790107a22dec316be](https://github.com/angular/components/commit/4b160255021a141a619fbfa790107a22dec316be)), closes [#20213](https://github.com/angular/components/issues/20213) |
| bug fix |  **datepicker:** remove scroll bar while animating in touch UI mode ([#21493](https://github.com/angular/components/issues/21493)) ([13aa3598c5ee991d289c5065687d18e535bab6f2](https://github.com/angular/components/commit/13aa3598c5ee991d289c5065687d18e535bab6f2)) |
| bug fix |  **datepicker:** unable to distinguish disabled calendar cells in high contrast mode ([#21399](https://github.com/angular/components/issues/21399)) ([791af8227abd6262bddb5d8fadd7cf6f2dc7404c](https://github.com/angular/components/commit/791af8227abd6262bddb5d8fadd7cf6f2dc7404c)) |
| bug fix |  **datepicker:** unable to pass in errorStateMatcher through binding on range input ([#21210](https://github.com/angular/components/issues/21210)) ([8f0e654b3fd274b4e3f007f55b6cf88f4e45daf6](https://github.com/angular/components/commit/8f0e654b3fd274b4e3f007f55b6cf88f4e45daf6)), closes [#21205](https://github.com/angular/components/issues/21205) |
| bug fix |  **menu:** allow menu height to grow after open ([#21436](https://github.com/angular/components/issues/21436)) ([83f2adc7b2b4e4749f8c60ece548836ce90e07bb](https://github.com/angular/components/commit/83f2adc7b2b4e4749f8c60ece548836ce90e07bb)), closes [#18168](https://github.com/angular/components/issues/18168) [#13988](https://github.com/angular/components/issues/13988) |
| bug fix |  **menu:** set correct focus origin on item when opened via keyboard ([#21252](https://github.com/angular/components/issues/21252)) ([3484f711be81187a898b389e9f81835c1ec7b477](https://github.com/angular/components/commit/3484f711be81187a898b389e9f81835c1ec7b477)), closes [#21241](https://github.com/angular/components/issues/21241) |
| bug fix |  **sort:** animation not working correctly when activated on focus ([#21339](https://github.com/angular/components/issues/21339)) ([4efb44a47f8af7f40f088d65cf5dc74196816b89](https://github.com/angular/components/commit/4efb44a47f8af7f40f088d65cf5dc74196816b89)) |
| bug fix |  **table:** increase specificity on sticky selector ([#21403](https://github.com/angular/components/issues/21403)) ([1f1875058b74362c682c8a9e054568cbaea3433e](https://github.com/angular/components/commit/1f1875058b74362c682c8a9e054568cbaea3433e)), closes [#19823](https://github.com/angular/components/issues/19823) [#19823](https://github.com/angular/components/issues/19823) [#20558](https://github.com/angular/components/issues/20558) |
| bug fix |  **table:** unsubscribe from source when disconnecting ([#21338](https://github.com/angular/components/issues/21338)) ([6d36942510722799f6c6822e96326c490f33b5f7](https://github.com/angular/components/commit/6d36942510722799f6c6822e96326c490f33b5f7)), closes [#21270](https://github.com/angular/components/issues/21270) |
| bug fix |  **tooltip:** assign role to aria description element ([eda397c8d5a1a6d5fa779e55e3f6359e37eb6851](https://github.com/angular/components/commit/eda397c8d5a1a6d5fa779e55e3f6359e37eb6851)), closes [#20593](https://github.com/angular/components/issues/20593) |
| bug fix |  **tooltip:** not closing when scrolling away using mouse wheel ([#19735](https://github.com/angular/components/issues/19735)) ([49927aedd8fbc98611c198b1616cedbd30679ff6](https://github.com/angular/components/commit/49927aedd8fbc98611c198b1616cedbd30679ff6)), closes [#18611](https://github.com/angular/components/issues/18611) |
| feature |  **button:** allow focus origin to be optional input in focus method ([#20898](https://github.com/angular/components/issues/20898)) ([23d0b80baeebccba9a11151cb1307905ed613379](https://github.com/angular/components/commit/23d0b80baeebccba9a11151cb1307905ed613379)) |
| feature |  **checkbox:** allow focus origin to be optional input in focus method ([#20905](https://github.com/angular/components/issues/20905)) ([5575673b4acb094f0aabc0830cfcffc5151ad739](https://github.com/angular/components/commit/5575673b4acb094f0aabc0830cfcffc5151ad739)) |
| feature |  **chips:** add test harnesses for selectable chips ([#20875](https://github.com/angular/components/issues/20875)) ([5f2407eb04bd1a33d2e1f5ebe3d5bc035cb01dd1](https://github.com/angular/components/commit/5f2407eb04bd1a33d2e1f5ebe3d5bc035cb01dd1)), closes [#20826](https://github.com/angular/components/issues/20826) |
| feature |  **core:** add date format for month label ([#21044](https://github.com/angular/components/issues/21044)) ([042b8fc113f80e1539fa9058a3db1352151c6371](https://github.com/angular/components/commit/042b8fc113f80e1539fa9058a3db1352151c6371)) |
| feature |  **datepicker:** add support for cancel/apply buttons ([#21487](https://github.com/angular/components/issues/21487)) ([d5908473b6a4f9493edb736c96a144cf3ea19f1b](https://github.com/angular/components/commit/d5908473b6a4f9493edb736c96a144cf3ea19f1b)) |
| feature |  **datepicker:** allow custom pickers with date inputs ([#20864](https://github.com/angular/components/issues/20864)) ([5b1660e0958411ea0c59c8fde21d3bcd4199ba2e](https://github.com/angular/components/commit/5b1660e0958411ea0c59c8fde21d3bcd4199ba2e)) |
| feature |  **datepicker:** allow for datepicker toggle aria-label to be customized ([#21077](https://github.com/angular/components/issues/21077)) ([4874320bb3504114d293621e4eee3a94a6d987ac](https://github.com/angular/components/commit/4874320bb3504114d293621e4eee3a94a6d987ac)), closes [#20590](https://github.com/angular/components/issues/20590) |
| feature |  **expansion:** allow focus origin to be optional input in focus method ([#20912](https://github.com/angular/components/issues/20912)) ([ea2f29db9b1fe97890717052121426f8e2929a37](https://github.com/angular/components/commit/ea2f29db9b1fe97890717052121426f8e2929a37)) |
| feature |  **icon:** add support for registry resolver function ([#21431](https://github.com/angular/components/issues/21431)) ([1fb03ceaabdfc516f4be69db71124efc22f8e4f2](https://github.com/angular/components/commit/1fb03ceaabdfc516f4be69db71124efc22f8e4f2)), closes [#18607](https://github.com/angular/components/issues/18607) |
| feature |  **list:** introduce type for checkbox position ([db7ff985ac5f7d36ae394f5190e69bc7dd06d064](https://github.com/angular/components/commit/db7ff985ac5f7d36ae394f5190e69bc7dd06d064)) |
| feature |  **menu:** allow focus origin to be optional input in focus method ([#20907](https://github.com/angular/components/issues/20907)) ([260f0607f888aa4c59aeb9637ffa90db51e2cadc](https://github.com/angular/components/commit/260f0607f888aa4c59aeb9637ffa90db51e2cadc)) |
| feature |  **radio:** allow focus origin to be optional input in focus method ([#20911](https://github.com/angular/components/issues/20911)) ([e3032451adda495d0019f53fb477b27224c87737](https://github.com/angular/components/commit/e3032451adda495d0019f53fb477b27224c87737)) |
| feature |  **schematics:** use newer Google Fonts version ([#21479](https://github.com/angular/components/issues/21479)) ([461602d4a55537ada358da1d3357e276fa26ad44](https://github.com/angular/components/commit/461602d4a55537ada358da1d3357e276fa26ad44)), closes [#21478](https://github.com/angular/components/issues/21478) |
| feature |  **sidenav:** add test harnesses for container and content elements ([#21115](https://github.com/angular/components/issues/21115)) ([63641c5fe19480554f0b850d579ffdcedb932466](https://github.com/angular/components/commit/63641c5fe19480554f0b850d579ffdcedb932466)), closes [#16695](https://github.com/angular/components/issues/16695) |
| feature |  **slide-toggle:** allow origin to be optional input in focus method ([#20913](https://github.com/angular/components/issues/20913)) ([a0d4ce302e48ab9f931416ebc975e17181bf6a05](https://github.com/angular/components/commit/a0d4ce302e48ab9f931416ebc975e17181bf6a05)) |
| feature |  **stepper:** allow focus origin to be optional input in focus method ([#20914](https://github.com/angular/components/issues/20914)) ([a3b5fe3b926c39d8c794a4d537dd04508057f298](https://github.com/angular/components/commit/a3b5fe3b926c39d8c794a4d537dd04508057f298)) |
| feature |  **table:** expand cell harness api ([#21162](https://github.com/angular/components/issues/21162)) ([ab19ecca121624d904997dccc1809fee0ab9a3d2](https://github.com/angular/components/commit/ab19ecca121624d904997dccc1809fee0ab9a3d2)), closes [#21157](https://github.com/angular/components/issues/21157) |

### google-maps

|            |                       |
| ---------- | --------------------- |
| bug fix |  compatibility with latest typings ([#21441](https://github.com/angular/components/issues/21441)) ([eee082dbe3304f5ddee4b702a29238c583400ad1](https://github.com/angular/components/commit/eee082dbe3304f5ddee4b702a29238c583400ad1)), closes [#21440](https://github.com/angular/components/issues/21440) |
| bug fix |  server-side rendering error from map clusterer ([#21049](https://github.com/angular/components/issues/21049)) ([4a587a11267bcb5a4dfcca8953bc1a87db754c49](https://github.com/angular/components/commit/4a587a11267bcb5a4dfcca8953bc1a87db754c49)) |
| bug fix |  typo in retina methods ([#21419](https://github.com/angular/components/issues/21419)) ([d21a78d0bb18978d25b2632c5d7d365de5f5ca3a](https://github.com/angular/components/commit/d21a78d0bb18978d25b2632c5d7d365de5f5ca3a)), closes [#21418](https://github.com/angular/components/issues/21418) |
| feature |  Add MapMarkerClusterer Component ([#20944](https://github.com/angular/components/issues/20944)) ([fb59f7aec79c3a745e38c3a4910dac85b766d24f](https://github.com/angular/components/commit/fb59f7aec79c3a745e38c3a4910dac85b766d24f)) |

### cdk-experimental

|            |                       |
| ---------- | --------------------- |
| feature |  **table-scroll-container:** Create directive and demo ([#21200](https://github.com/angular/components/issues/21200)) ([deead4c69a59393c12dd3c496ab3879c7a1dcd0f](https://github.com/angular/components/commit/deead4c69a59393c12dd3c496ab3879c7a1dcd0f)), closes [#5885](https://github.com/angular/components/issues/5885) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **mdc-list:** not accounting for global ripple options ([#21393](https://github.com/angular/components/issues/21393)) ([e1ed7aecc46e0ae138069a19d63a9a15dacb3c3b](https://github.com/angular/components/commit/e1ed7aecc46e0ae138069a19d63a9a15dacb3c3b)) |
| bug fix |  **mdc-autocomplete:** panel losing max-height if menu is opened after autocomplete ([#21394](https://github.com/angular/components/issues/21394)) ([3335a9295537c4a695fbdee4c4a078f4748ed176](https://github.com/angular/components/commit/3335a9295537c4a695fbdee4c4a078f4748ed176)), closes [#21341](https://github.com/angular/components/issues/21341) |
| bug fix |  **mdc-button:** fix ripple noop animation ([#21360](https://github.com/angular/components/issues/21360)) ([c5a111d98a0218f93f8fea7864b11ad4225c3e01](https://github.com/angular/components/commit/c5a111d98a0218f93f8fea7864b11ad4225c3e01)) |
| bug fix |  **mdc-checkbox:** fix dark theme ([#20926](https://github.com/angular/components/issues/20926)) ([9b3992bcbac62a26aefd2131f8b4c72c141ef420](https://github.com/angular/components/commit/9b3992bcbac62a26aefd2131f8b4c72c141ef420)) |
| bug fix |  **mdc-chips:** align test harnesses with the non-MDC version ([#21051](https://github.com/angular/components/issues/21051)) ([b07c5394c213126fa75e81743ee1a323fd99d6b3](https://github.com/angular/components/commit/b07c5394c213126fa75e81743ee1a323fd99d6b3)) |
| bug fix |  **mdc-chips:** use MDC-based form field ([#20880](https://github.com/angular/components/issues/20880)) ([7596532e210528ef9731fbc3342b814a17d13c15](https://github.com/angular/components/commit/7596532e210528ef9731fbc3342b814a17d13c15)) |
| bug fix |  **mdc-core:** add missing symbols ([fc68d5c5421cd85291b84188c83aeceec054b8b3](https://github.com/angular/components/commit/fc68d5c5421cd85291b84188c83aeceec054b8b3)) |
| bug fix |  **mdc-form-field:** add padding to subscript to align with spec ([#21265](https://github.com/angular/components/issues/21265)) ([eb32025b332cd1095b556621bbce898b733d8f07](https://github.com/angular/components/commit/eb32025b332cd1095b556621bbce898b733d8f07)) |
| bug fix |  **mdc-form-field:** fill appearance blending in with the background in high contrast mode ([#21446](https://github.com/angular/components/issues/21446)) ([3aa552760ac2f7ce5858e09572b98d14baee0637](https://github.com/angular/components/commit/3aa552760ac2f7ce5858e09572b98d14baee0637)) |
| bug fix |  **mdc-form-field:** fix fill appearance contrast ratio ([#21365](https://github.com/angular/components/issues/21365)) ([27e60e85324de7841d0cb3316d78bc67063427e0](https://github.com/angular/components/commit/27e60e85324de7841d0cb3316d78bc67063427e0)) |
| bug fix |  **mdc-input:** add autosize directive ([#21105](https://github.com/angular/components/issues/21105)) ([c8581a661b7167abf89e64b00f7c41e8cda8c333](https://github.com/angular/components/commit/c8581a661b7167abf89e64b00f7c41e8cda8c333)) |
| bug fix |  **mdc-list:** checkbox and icon alignment incorrect ([96cc2a61559149f68958148731c086aa4c2d95d0](https://github.com/angular/components/commit/96cc2a61559149f68958148731c086aa4c2d95d0)) |
| bug fix |  **mdc-list:** make internal input non-interactive ([#21438](https://github.com/angular/components/issues/21438)) ([c268246c05409df3f9df8496305f8bf57c624eae](https://github.com/angular/components/commit/c268246c05409df3f9df8496305f8bf57c624eae)) |
| bug fix |  **mdc-progress-spinner:** fix noop animation ([#21359](https://github.com/angular/components/issues/21359)) ([71b7b15958ee732fbe1398d68705143eb0e820e3](https://github.com/angular/components/commit/71b7b15958ee732fbe1398d68705143eb0e820e3)) |
| bug fix |  **mdc-progress-spinner:** indeterminate animation not working ([#21391](https://github.com/angular/components/issues/21391)) ([37a9c4ee420b8098be12ad745acaec50e680ab9b](https://github.com/angular/components/commit/37a9c4ee420b8098be12ad745acaec50e680ab9b)), closes [#21359](https://github.com/angular/components/issues/21359) |
| bug fix |  **mdc-select:** panel losing max-height if menu is opened after select ([#21341](https://github.com/angular/components/issues/21341)) ([c5300677b235049b991b065464e1eade01b654dc](https://github.com/angular/components/commit/c5300677b235049b991b065464e1eade01b654dc)) |
| bug fix |  **mdc-slide-toggle:** add class to mdc-switch element ([#21284](https://github.com/angular/components/issues/21284)) ([5cc960157a3260c90bfd7e5f442d7979c577605c](https://github.com/angular/components/commit/5cc960157a3260c90bfd7e5f442d7979c577605c)) |
| bug fix |  **mdc-snack-bar:** disable animations in noop ([#21377](https://github.com/angular/components/issues/21377)) ([bcbdb74f8266ff1d0053b074060b28280b49405b](https://github.com/angular/components/commit/bcbdb74f8266ff1d0053b074060b28280b49405b)) |
| bug fix |  **mdc-snack-bar:** not stretching to full width on handset ([#21477](https://github.com/angular/components/issues/21477)) ([85a88545e7aed8d405115f3d1e865495e4184970](https://github.com/angular/components/commit/85a88545e7aed8d405115f3d1e865495e4184970)) |
| bug fix |  **mdc-snack-bar:** simple snack button should be accent ([#21384](https://github.com/angular/components/issues/21384)) ([9f5cfbd0ab7613f310dd2ae5936fc4dae6657baf](https://github.com/angular/components/commit/9f5cfbd0ab7613f310dd2ae5936fc4dae6657baf)) |
| bug fix |  **mdc-table:** don't import template from other ([#21594](https://github.com/angular/components/issues/21594)) ([dc33472acabfeb3d7e8a98c0ceaf1d0f9fdff5cd](https://github.com/angular/components/commit/dc33472acabfeb3d7e8a98c0ceaf1d0f9fdff5cd)) |
| bug fix |  **mdc-table:** error when flexbox-based table is initialized ([#21428](https://github.com/angular/components/issues/21428)) ([2255b66abcc059a288c73338b55064e21b983f17](https://github.com/angular/components/commit/2255b66abcc059a288c73338b55064e21b983f17)), closes [#20994](https://github.com/angular/components/issues/20994) |
| bug fix |  **mdc-table:** export missing symbols ([#20924](https://github.com/angular/components/issues/20924)) ([f7d7502f9eba5293c98841a0e7063bd84589a340](https://github.com/angular/components/commit/f7d7502f9eba5293c98841a0e7063bd84589a340)) |
| bug fix |  **mdc-table:** remove bottom border for flex table ([#21566](https://github.com/angular/components/issues/21566)) ([1ce49a37c69bda475e7909f70f1114e74d69cefc](https://github.com/angular/components/commit/1ce49a37c69bda475e7909f70f1114e74d69cefc)) |
| bug fix |  **mdc-tabs:** delete custom tab min-width ([#20979](https://github.com/angular/components/issues/20979)) ([c266f3b889e7b10e6d136b6983a2ce6ae512df44](https://github.com/angular/components/commit/c266f3b889e7b10e6d136b6983a2ce6ae512df44)) |
| feature |  **mdc-autocomplete:** add panel animation ([#21525](https://github.com/angular/components/issues/21525)) ([8aebd03988c5403226143ab9398933011f67a5e3](https://github.com/angular/components/commit/8aebd03988c5403226143ab9398933011f67a5e3)) |
| feature |  **mdc-chips:** add `remove` method to MDC chip harness ([#20831](https://github.com/angular/components/issues/20831)) ([d29ef7629fd78c9da6d8d39787ab191ffdf8d4ed](https://github.com/angular/components/commit/d29ef7629fd78c9da6d8d39787ab191ffdf8d4ed)) |
| feature |  **mdc-table:** add mat-table selector ([#20994](https://github.com/angular/components/issues/20994)) ([f0f3748b7841d5c7e4e71b21238dee9ab05e8bcb](https://github.com/angular/components/commit/f0f3748b7841d5c7e4e71b21238dee9ab05e8bcb)) |


## 11.0.4 "silver-specter" (2021-01-14)

### cdk

|            |                       |
| ---------- | --------------------- |
| bug fix |  **a11y:** focusVia not accounting for focused child node ([#21512](https://github.com/angular/components/issues/21512)) ([612cdc1](https://github.com/angular/components/commit/612cdc1)), closes [#20966](https://github.com/angular/components/issues/20966) [#21500](https://github.com/angular/components/issues/21500) |
| bug fix |  **drag-drop:** account for enterPredicate when setting receiving class ([#21346](https://github.com/angular/components/issues/21346)) ([c535444](https://github.com/angular/components/commit/c535444)), closes [#21171](https://github.com/angular/components/issues/21171) |
| bug fix |  **drag-drop:** don't block scrolling if it happens before delay has elapsed ([#21382](https://github.com/angular/components/issues/21382)) ([4134580](https://github.com/angular/components/commit/4134580)), closes [#17923](https://github.com/angular/components/issues/17923) |
| bug fix |  **drag-drop:** don't stop event propagation unless nested ([#21227](https://github.com/angular/components/issues/21227)) ([87ee0b8](https://github.com/angular/components/commit/87ee0b8)), closes [#19334](https://github.com/angular/components/issues/19334) [#19333](https://github.com/angular/components/issues/19333) |
| bug fix |  **overlay:** block scroll strategy throwing off scroll behavior feature detection ([#17223](https://github.com/angular/components/issues/17223)) ([c04d8be](https://github.com/angular/components/commit/c04d8be)), closes [#17221](https://github.com/angular/components/issues/17221) |
| bug fix |  **scrolling:** Prevents NaN being returned as firstVisibleIndex. ([#21505](https://github.com/angular/components/issues/21505)) ([8875221](https://github.com/angular/components/commit/8875221)) |
| bug fix |  **scrolling:** virtual scroll not picking up trackBy function when items come in after init ([#21335](https://github.com/angular/components/issues/21335)) ([2a6862d](https://github.com/angular/components/commit/2a6862d)), closes [#21281](https://github.com/angular/components/issues/21281) |
| bug fix |  **tree:** add missing generic types to trackBy ([#21421](https://github.com/angular/components/issues/21421)) ([6318d11](https://github.com/angular/components/commit/6318d11)), closes [#21364](https://github.com/angular/components/issues/21364) |

### material

|            |                       |
| ---------- | --------------------- |
| bug fix |  **autocomplete:** not closing when clicking outside using auxilliary button ([#21397](https://github.com/angular/components/issues/21397)) ([9c6dfd6](https://github.com/angular/components/commit/9c6dfd6)) |
| bug fix |  **core:** unable to distinguish disabled mat-option in high contrast mode ([#21484](https://github.com/angular/components/issues/21484)) ([c2f337e](https://github.com/angular/components/commit/c2f337e)) |
| bug fix |  **datepicker:** a couple of accessibility issues in touch UI mode ([#21228](https://github.com/angular/components/issues/21228)) ([175d4e4](https://github.com/angular/components/commit/175d4e4)) |
| bug fix |  **datepicker:** adjust focused date background for better visibility ([#21176](https://github.com/angular/components/issues/21176)) ([3889bf4](https://github.com/angular/components/commit/3889bf4)) |
| bug fix |  **datepicker:** remove scroll bar while animating in touch UI mode ([#21493](https://github.com/angular/components/issues/21493)) ([819e2f8](https://github.com/angular/components/commit/819e2f8)) |
| bug fix |  **datepicker:** unable to distinguish disabled calendar cells in high contrast mode ([#21399](https://github.com/angular/components/issues/21399)) ([748072d](https://github.com/angular/components/commit/748072d)) |
| bug fix |  **datepicker:** unable to pass in errorStateMatcher through binding on range input ([#21210](https://github.com/angular/components/issues/21210)) ([421a849](https://github.com/angular/components/commit/421a849)), closes [#21205](https://github.com/angular/components/issues/21205) |
| bug fix |  **menu:** allow menu height to grow after open ([#21436](https://github.com/angular/components/issues/21436)) ([bc5c3a7](https://github.com/angular/components/commit/bc5c3a7)), closes [#18168](https://github.com/angular/components/issues/18168) [#13988](https://github.com/angular/components/issues/13988) |
| bug fix |  **menu:** set correct focus origin on item when opened via keyboard ([#21252](https://github.com/angular/components/issues/21252)) ([995ed98](https://github.com/angular/components/commit/995ed98)), closes [#21241](https://github.com/angular/components/issues/21241) |
| bug fix |  **sort:** animation not working correctly when activated on focus ([#21339](https://github.com/angular/components/issues/21339)) ([2e13216](https://github.com/angular/components/commit/2e13216)) |
| bug fix |  **table:** increase specificity on sticky selector ([#21403](https://github.com/angular/components/issues/21403)) ([760fb30](https://github.com/angular/components/commit/760fb30)), closes [#19823](https://github.com/angular/components/issues/19823) [#19823](https://github.com/angular/components/issues/19823) [#20558](https://github.com/angular/components/issues/20558) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **mdc-autocomplete:** panel losing max-height if menu is opened after autocomplete ([#21394](https://github.com/angular/components/issues/21394)) ([007d4ac](https://github.com/angular/components/commit/007d4ac)), closes [#21341](https://github.com/angular/components/issues/21341) |
| bug fix |  **mdc-button:** fix ripple noop animation ([#21360](https://github.com/angular/components/issues/21360)) ([5d2edfd](https://github.com/angular/components/commit/5d2edfd)) |
| bug fix |  **mdc-form-field:** fill appearance blending in with the background in high contrast mode ([#21446](https://github.com/angular/components/issues/21446)) ([a0adffd](https://github.com/angular/components/commit/a0adffd)) |
| bug fix |  **mdc-form-field:** fix fill appearance contrast ratio ([#21365](https://github.com/angular/components/issues/21365)) ([f9a166d](https://github.com/angular/components/commit/f9a166d)) |
| bug fix |  **mdc-list:** make internal input non-interactive ([#21438](https://github.com/angular/components/issues/21438)) ([22bd693](https://github.com/angular/components/commit/22bd693)) |
| bug fix |  **mdc-progress-spinner:** fix noop animation ([#21359](https://github.com/angular/components/issues/21359)) ([b1d8fb3](https://github.com/angular/components/commit/b1d8fb3)) |
| bug fix |  **mdc-progress-spinner:** indeterminate animation not working ([#21391](https://github.com/angular/components/issues/21391)) ([4d60f90](https://github.com/angular/components/commit/4d60f90)), closes [#21359](https://github.com/angular/components/issues/21359) |
| bug fix |  **mdc-select:** panel losing max-height if menu is opened after select ([#21341](https://github.com/angular/components/issues/21341)) ([8714cd5](https://github.com/angular/components/commit/8714cd5)) |
| bug fix |  **mdc-slide-toggle:** add class to mdc-switch element ([#21284](https://github.com/angular/components/issues/21284)) ([0266db2](https://github.com/angular/components/commit/0266db2)) |
| bug fix |  **mdc-snack-bar:** disable animations in noop ([#21377](https://github.com/angular/components/issues/21377)) ([97aac4e](https://github.com/angular/components/commit/97aac4e)) |
| bug fix |  **mdc-snack-bar:** not stretching to full width on handset ([#21477](https://github.com/angular/components/issues/21477)) ([3e9ef44](https://github.com/angular/components/commit/3e9ef44)) |
| bug fix |  **mdc-snack-bar:** simple snack button should be accent ([#21384](https://github.com/angular/components/issues/21384)) ([8e57fc8](https://github.com/angular/components/commit/8e57fc8)) |
| bug fix |  **mdc-table:** error when flexbox-based table is initialized ([#21428](https://github.com/angular/components/issues/21428)) ([aade5d1](https://github.com/angular/components/commit/aade5d1)), closes [#20994](https://github.com/angular/components/issues/20994) |
| bug fix |  **mdc-table:** remove bottom border for flex table ([#21566](https://github.com/angular/components/issues/21566)) ([ce5d10a](https://github.com/angular/components/commit/ce5d10a)) |
| feature |  **mdc-autocomplete:** add panel animation ([#21525](https://github.com/angular/components/issues/21525)) ([2063a55](https://github.com/angular/components/commit/2063a55)) |
| feature |  **mdc-table:** add mat-table selector ([#20994](https://github.com/angular/components/issues/20994)) ([d84d3d0](https://github.com/angular/components/commit/d84d3d0)) |


## 11.0.3 "adobe-home" (2020-12-14)

### material

|            |                       |
| ---------- | --------------------- |
| bug fix |  **datepicker:** screen reader not announcing view switch button value ([#21229](https://github.com/angular/components/issues/21229)) ([dbae066](https://github.com/angular/components/commit/dbae066)) |
| bug fix |  **expansion:** not clearing custom query list ([#21222](https://github.com/angular/components/issues/21222)) ([f0dc895](https://github.com/angular/components/commit/f0dc895)) |
| bug fix |  **menu:** clear static aria attributes from host node ([#21231](https://github.com/angular/components/issues/21231)) ([f568af1](https://github.com/angular/components/commit/f568af1)), closes [#21152](https://github.com/angular/components/issues/21152) |
| bug fix |  **select:** incorrect default typeahead debounce time ([#21253](https://github.com/angular/components/issues/21253)) ([8c56d06](https://github.com/angular/components/commit/8c56d06)), closes [#21242](https://github.com/angular/components/issues/21242) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **mdc-form-field:** make sure fonts are loaded before calculating notch width ([#21245](https://github.com/angular/components/issues/21245)) ([0dae8a8](https://github.com/angular/components/commit/0dae8a8)) |


## 11.0.2 "paper-bag" (2020-12-07)

### cdk

|            |                       |
| ---------- | --------------------- |
| bug fix |  **drag-drop:** preview not inheriting styles inside shadow dom ([#21107](https://github.com/angular/components/issues/21107)) ([8f178c5](https://github.com/angular/components/commit/8f178c5)) |
| bug fix |  **observers:** incorrect coercion member type ([#21116](https://github.com/angular/components/issues/21116)) ([5921859](https://github.com/angular/components/commit/5921859)), closes [#21101](https://github.com/angular/components/issues/21101) |
| bug fix |  **schematics:** fix resolving modules in ng update ([#21161](https://github.com/angular/components/issues/21161)) ([a60a055](https://github.com/angular/components/commit/a60a055)), closes [#21160](https://github.com/angular/components/issues/21160) |

### material

|            |                       |
| ---------- | --------------------- |
| bug fix |  **autocomplete:** add missing aria-label for autocomplete panel ([#20892](https://github.com/angular/components/issues/20892)) ([e878ca7](https://github.com/angular/components/commit/e878ca7)) |
| bug fix |  **bottom-sheet:** some changes not being picked up ([#21175](https://github.com/angular/components/issues/21175)) ([8ee9369](https://github.com/angular/components/commit/8ee9369)), closes [#21141](https://github.com/angular/components/issues/21141) |
| bug fix |  **button-toggle:** fix ChromeVox focus issue on button toggle ([#21046](https://github.com/angular/components/issues/21046)) ([868915e](https://github.com/angular/components/commit/868915e)) |
| bug fix |  **radio:** group selected button not set for preselected control value ([#21154](https://github.com/angular/components/issues/21154)) ([3194a3e](https://github.com/angular/components/commit/3194a3e)), closes [#21148](https://github.com/angular/components/issues/21148) |
| bug fix |  **slider:** unable to assign min/max values if they are more precise than then step ([#21155](https://github.com/angular/components/issues/21155)) ([80a6bfb](https://github.com/angular/components/commit/80a6bfb)), closes [#21147](https://github.com/angular/components/issues/21147) |
| feature |  **core:** add typography config normalization function ([#21059](https://github.com/angular/components/issues/21059)) ([6830350](https://github.com/angular/components/commit/6830350)) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **mdc-radio:** include form field styles in mdc-radio theme ([#21168](https://github.com/angular/components/issues/21168)) ([0aa94ac](https://github.com/angular/components/commit/0aa94ac)) |
| bug fix |  **mdc-select:** fix long labels being incorrectly cut off ([#21184](https://github.com/angular/components/issues/21184)) ([5f47e8b](https://github.com/angular/components/commit/5f47e8b)) |
| bug fix |  **mdc-table:** Fix sticky scrolling ([#21211](https://github.com/angular/components/issues/21211)) ([ceb0066](https://github.com/angular/components/commit/ceb0066)) |


## 11.0.1 "bismuth-cape" (2020-11-24)

### cdk

|            |                       |
| ---------- | --------------------- |
| bug fix |  **drag-drop:** avoid retaining disabled handles after they've been destroyed ([#21015](https://github.com/angular/components/issues/21015)) ([7ab8a8e](https://github.com/angular/components/commit/7ab8a8e)), closes [#21009](https://github.com/angular/components/issues/21009) |
| bug fix |  **drag-drop:** don't disable native dragging on inactive handles ([#20991](https://github.com/angular/components/issues/20991)) ([dcf870d](https://github.com/angular/components/commit/dcf870d)), closes [#20974](https://github.com/angular/components/issues/20974) |

### material

|            |                       |
| ---------- | --------------------- |
| bug fix |  **checkbox:** no color assigned if defaults don't have a color ([#21042](https://github.com/angular/components/issues/21042)) ([c1a65c3](https://github.com/angular/components/commit/c1a65c3)), closes [#21031](https://github.com/angular/components/issues/21031) |
| bug fix |  **chips:** ripple not disabled when animations are disabled ([#20982](https://github.com/angular/components/issues/20982)) ([42acf11](https://github.com/angular/components/commit/42acf11)), closes [#20981](https://github.com/angular/components/issues/20981) |
| bug fix |  **datepicker:** don't invoke change handler when filter is swapped out if result is the same ([#20970](https://github.com/angular/components/issues/20970)) ([ee78609](https://github.com/angular/components/commit/ee78609)), closes [#20967](https://github.com/angular/components/issues/20967) |
| bug fix |  **datepicker:** screen reader close button style specificity too low ([#21058](https://github.com/angular/components/issues/21058)) ([aba227a](https://github.com/angular/components/commit/aba227a)), closes [#21043](https://github.com/angular/components/issues/21043) |
| bug fix |  **menu:** icons in menu not inheriting disabled color ([#20948](https://github.com/angular/components/issues/20948)) ([e629d65](https://github.com/angular/components/commit/e629d65)), closes [#20947](https://github.com/angular/components/issues/20947) |
| bug fix |  **select:** remove focus outline on panel ([#21005](https://github.com/angular/components/issues/21005)) ([a5ab829](https://github.com/angular/components/commit/a5ab829)) |
| feature |  **checkbox:** Avoid nested divs in labels by changing to span instead. ([#20990](https://github.com/angular/components/issues/20990)) ([c7153e1](https://github.com/angular/components/commit/c7153e1)) |
| feature |  **radio:** Avoid nested divs in labels by changing to span instead. ([#20986](https://github.com/angular/components/issues/20986)) ([e001e70](https://github.com/angular/components/commit/e001e70)) |

### google-maps

|            |                       |
| ---------- | --------------------- |
| bug fix |  avoid using dotted property access ([#21074](https://github.com/angular/components/issues/21074)) ([3ee3e30](https://github.com/angular/components/commit/3ee3e30)) |
| bug fix |  info window not opening if no anchor is passed in ([#21014](https://github.com/angular/components/issues/21014)) ([36cb325](https://github.com/angular/components/commit/36cb325)), closes [#21013](https://github.com/angular/components/issues/21013) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **mdc-button:** fix positioning of icons in text buttons ([#20963](https://github.com/angular/components/issues/20963)) ([c287f5d](https://github.com/angular/components/commit/c287f5d)) |
| bug fix |  **mdc-paginator:** buttons not visible in high contrast mode ([#21096](https://github.com/angular/components/issues/21096)) ([e7cabf1](https://github.com/angular/components/commit/e7cabf1)) |
| bug fix |  **mdc-progress-spinner:** prevent animation from affecting surrounding layout ([#20962](https://github.com/angular/components/issues/20962)) ([c598fe2](https://github.com/angular/components/commit/c598fe2)), closes [#16930](https://github.com/angular/components/issues/16930) |


# 11.0.0 "nitrite-trilobite" (2020-11-11)

### cdk

|            |                       |
| ---------- | --------------------- |
| bug fix |  **a11y:** allow for origin of already focused element to be changed ([#20966](https://github.com/angular/components/issues/20966)) ([da581a2](https://github.com/angular/components/commit/da581a2)), closes [#20965](https://github.com/angular/components/issues/20965) |
| bug fix |  **layout:** decrease breakpoint upper bounds ([#20866](https://github.com/angular/components/issues/20866)) ([cf7267e](https://github.com/angular/components/commit/cf7267e)), closes [angular/components#20850](https://github.com/angular/components/issues/20850) |
| bug fix |  **stepper:** error if out-of-bounds index is assigned before initialization ([#20766](https://github.com/angular/components/issues/20766)) ([793b62f](https://github.com/angular/components/commit/793b62f)), closes [#20735](https://github.com/angular/components/issues/20735) |
| bug fix |  **drag-drop:** error if dragging starts from active sibling container ([#20704](https://github.com/angular/components/issues/20704)) ([6d86f0f](https://github.com/angular/components/commit/6d86f0f)), closes [#20623](https://github.com/angular/components/issues/20623) |
| bug fix |  **drag-drop:** error when cloning file input with value ([#20793](https://github.com/angular/components/issues/20793)) ([5eb1035](https://github.com/angular/components/commit/5eb1035)), closes [#20783](https://github.com/angular/components/issues/20783) |
| bug fix |  **drag-drop:** references to SVG not working inside preview ([#20742](https://github.com/angular/components/issues/20742)) ([06294d1](https://github.com/angular/components/commit/06294d1)), closes [#20720](https://github.com/angular/components/issues/20720) |
| feature |  **scrolling:** update CdkVirtualForOf to work with sets. ([#20594](https://github.com/angular/components/issues/20594)) ([e15f82c](https://github.com/angular/components/commit/e15f82c)), closes [#20210](https://github.com/angular/components/issues/20210) |
| bug fix |  **testing:** avoid using dotted property access for dispatchEven… ([#20754](https://github.com/angular/components/issues/20754)) ([7d99c35](https://github.com/angular/components/commit/7d99c35)) |
| feature |  **overlay:** connected-overlay directive should have input for disabling escape close ([#20585](https://github.com/angular/components/issues/20585)) ([57c7b6a](https://github.com/angular/components/commit/57c7b6a)) |
| feature |  **testing:** add the ability to dispatch arbitrary events ([#20714](https://github.com/angular/components/issues/20714)) ([b7cfe67](https://github.com/angular/components/commit/b7cfe67)) |
| feature |  **testing:** support right clicking on a TestElement ([#20400](https://github.com/angular/components/issues/20400)) ([b1be164](https://github.com/angular/components/commit/b1be164)), closes [#20385](https://github.com/angular/components/issues/20385) |
| bug fix |  **a11y:** cdkAriaLive default to polite ([#20672](https://github.com/angular/components/issues/20672)) ([1ac653f](https://github.com/angular/components/commit/1ac653f)), closes [#11618](https://github.com/angular/components/issues/11618) |
| bug fix |  **a11y:** error if FocusMonitor is used on non-element nodes ([#20640](https://github.com/angular/components/issues/20640)) ([9edab81](https://github.com/angular/components/commit/9edab81)), closes [#20632](https://github.com/angular/components/issues/20632) |
| bug fix |  **drag-drop:** throw if drop list or handle are set on a non-element node ([#20668](https://github.com/angular/components/issues/20668)) ([d4b505a](https://github.com/angular/components/commit/d4b505a)), closes [#13540](https://github.com/angular/components/issues/13540) |
| bug fix |  **testing:** fix behavior in fakeAsync tests ([#20638](https://github.com/angular/components/issues/20638)) ([40fa9ff](https://github.com/angular/components/commit/40fa9ff)) |
| bug fix |  **tree:** fix level for nested tree nodes ([#20226](https://github.com/angular/components/issues/20226)) ([f951bf4](https://github.com/angular/components/commit/f951bf4)) |
| feature |  **coercion:** add coercion for string arrays ([#20652](https://github.com/angular/components/issues/20652)) ([a14eeb4](https://github.com/angular/components/commit/a14eeb4)) |
| feature |  **table:** add API for registering no data row ([#20658](https://github.com/angular/components/issues/20658)) ([58341a7](https://github.com/angular/components/commit/58341a7)), closes [#20560](https://github.com/angular/components/issues/20560) |
| feature |  **table:** fixed table layouts ([#20258](https://github.com/angular/components/issues/20258)) ([58e0c48](https://github.com/angular/components/commit/58e0c48)) |
| feature |  **testing:** add getNativeElement to harness environments ([#20538](https://github.com/angular/components/issues/20538)) ([1328420](https://github.com/angular/components/commit/1328420)) |
| feature |  **testing:** add the ability to select options inside a native select ([6de8ca3](https://github.com/angular/components/commit/6de8ca3)) |
| feature |  **testing:** allow disabling & batching of change detection ([#20464](https://github.com/angular/components/issues/20464)) ([5562788](https://github.com/angular/components/commit/5562788)) |
| feature |  **testing:** make MatButtonHarness extend ContentContainerComponentHarness ([#20653](https://github.com/angular/components/issues/20653)) ([8cacf64](https://github.com/angular/components/commit/8cacf64)) |
| performance |  **testing:** Improve performance of clicking in unit tests. ([#20441](https://github.com/angular/components/issues/20441)) ([5b725d6](https://github.com/angular/components/commit/5b725d6)) |

### material

Note: Support for the node-sass npm package, based on libsass, was deprecated in version 10. This
support officially ends with version 11. Ending support for node-sass allows us to switch to the
new Sass module system (the `@use` syntax), simplifying our Sass and keeping up with ecosystem
best practices. The `sass` npm package is an API compatible replacement maintained by the official
Sass team at Google. 

_Breaking changes:_

* **snack-bar:** matSnackBarHarness.getRole() replaced with .getAriaLive() due to using aria-live
rather than the alert and status roles.
* Deprecated month constants from `@angular/material/core` have been
removed. These have been accidentally published in the past while they
were only intended for internal consumption in tests.

|            |                       |
| ---------- | --------------------- |
| bug fix |  **button-toggle:** clear static aria attributes from host nodes ([#17086](https://github.com/angular/components/issues/17086)) ([fab6880](https://github.com/angular/components/commit/fab6880)), closes [#16938](https://github.com/angular/components/issues/16938) |
| bug fix |  **checkbox:** set display on host node ([#20961](https://github.com/angular/components/issues/20961)) ([d868717](https://github.com/angular/components/commit/d868717)), closes [#20954](https://github.com/angular/components/issues/20954) |
| bug fix |  **datepicker:** input harness not dispatching dateChange event ([#20877](https://github.com/angular/components/issues/20877)) ([a2cd41b](https://github.com/angular/components/commit/a2cd41b)), closes [#20480](https://github.com/angular/components/issues/20480) |
| bug fix |  **datepicker:** range input emitters not picked up by language service ([#20937](https://github.com/angular/components/issues/20937)) ([63d9364](https://github.com/angular/components/commit/63d9364)), closes [#20932](https://github.com/angular/components/issues/20932) |
| bug fix |  **dialog:** incorrect action height if box-sizing is configured globally ([#20889](https://github.com/angular/components/issues/20889)) ([cc32c5d](https://github.com/angular/components/commit/cc32c5d)), closes [#20887](https://github.com/angular/components/issues/20887) |
| bug fix |  **paginator:** remove unnecessary @ViewChild in harness test ([#20943](https://github.com/angular/components/issues/20943)) ([28c70d3](https://github.com/angular/components/commit/28c70d3)) |
| bug fix |  **progress-bar:** buffer not rendering correctly on ios ([#19346](https://github.com/angular/components/issues/19346)) ([4eb5504](https://github.com/angular/components/commit/4eb5504)), closes [#19328](https://github.com/angular/components/issues/19328) |
| bug fix |  **progress-spinner:** rotating circle changing surrounding layout ([#16930](https://github.com/angular/components/issues/16930)) ([87ccb98](https://github.com/angular/components/commit/87ccb98)), closes [#16894](https://github.com/angular/components/issues/16894) |
| bug fix |  **slider:** some screen readers announcing long decimal values ([#20870](https://github.com/angular/components/issues/20870)) ([2291100](https://github.com/angular/components/commit/2291100)), closes [#20719](https://github.com/angular/components/issues/20719) |
| bug fix |  **table:** filter predicate not called for falsy values ([#19094](https://github.com/angular/components/issues/19094)) ([acd8e74](https://github.com/angular/components/commit/acd8e74)), closes [#19092](https://github.com/angular/components/issues/19092) [#9967](https://github.com/angular/components/issues/9967) |
| bug fix |  **icon:** not updating svg icon assigned through setter ([#20509](https://github.com/angular/components/issues/20509)) ([9f73933](https://github.com/angular/components/commit/9f73933)), closes [#20470](https://github.com/angular/components/issues/20470) |
| bug fix |  **list:** exclude icons from harness getText result ([#20845](https://github.com/angular/components/issues/20845)) ([aec12b6](https://github.com/angular/components/commit/aec12b6)), closes [#20812](https://github.com/angular/components/issues/20812) |
| bug fix |  **button:** add more prominent focus indication in high contrast mode ([#20821](https://github.com/angular/components/issues/20821)) ([345ad70](https://github.com/angular/components/commit/345ad70)), closes [#20820](https://github.com/angular/components/issues/20820) |
| bug fix |  **menu:** getLabel not working if text is inside indirect descendant node ([#20705](https://github.com/angular/components/issues/20705)) ([a461929](https://github.com/angular/components/commit/a461929)), closes [#20200](https://github.com/angular/components/issues/20200) |
| feature |  **tabs:** add test harnesses for tab nav bar ([#20822](https://github.com/angular/components/issues/20822)) ([bb44f02](https://github.com/angular/components/commit/bb44f02)) |
| bug fix |  **datepicker:** add close button for screen readers ([#20666](https://github.com/angular/components/issues/20666)) ([407398f](https://github.com/angular/components/commit/407398f)), closes [#14379](https://github.com/angular/components/issues/14379) |
| bug fix |  **datepicker:** don't handle escape key presses with modifier ([#20713](https://github.com/angular/components/issues/20713)) ([54f36a3](https://github.com/angular/components/commit/54f36a3)) |
| bug fix |  **select:** make VoiceOver read options for selects in dialogs ([#20695](https://github.com/angular/components/issues/20695)) ([33a43f7](https://github.com/angular/components/commit/33a43f7)), closes [#20694](https://github.com/angular/components/issues/20694) |
| feature |  **select:** add a global option to specify overlay panel class ([#20702](https://github.com/angular/components/issues/20702)) ([17a9ad0](https://github.com/angular/components/commit/17a9ad0)) |
| feature |  **tabs:** allow for dynamicHeight to be configured through MAT_TABS_CONFIG ([#19677](https://github.com/angular/components/issues/19677)) ([d6e6f44](https://github.com/angular/components/commit/d6e6f44)), closes [#19662](https://github.com/angular/components/issues/19662) |
| feature |  **tree:** add getTreeStructure for tree harness ([#20568](https://github.com/angular/components/issues/20568)) ([483c3e2](https://github.com/angular/components/commit/483c3e2)) |
| bug fix |  **core:** incorrectly formatting dates in the years 0 to 99 ([#20612](https://github.com/angular/components/issues/20612)) ([dd49fa6](https://github.com/angular/components/commit/dd49fa6)), closes [#20418](https://github.com/angular/components/issues/20418) |
| bug fix |  **datepicker:** fix handling of short years ([#20709](https://github.com/angular/components/issues/20709)) ([b3f1fb3](https://github.com/angular/components/commit/b3f1fb3)) |
| bug fix |  **menu:** open animation not working on repeat opens ([#20382](https://github.com/angular/components/issues/20382)) ([ea628c9](https://github.com/angular/components/commit/ea628c9)), closes [#20379](https://github.com/angular/components/issues/20379) |
| bug fix |  **select:** option active styling not removed when value is changed programmatically ([#20649](https://github.com/angular/components/issues/20649)) ([c4078aa](https://github.com/angular/components/commit/c4078aa)), closes [#19970](https://github.com/angular/components/issues/19970) [#19970](https://github.com/angular/components/issues/19970) |
| bug fix |  **snack-bar:** flaky screen reader announcements for NVDA/JAWS ([#20487](https://github.com/angular/components/issues/20487)) ([cf8e8ee](https://github.com/angular/components/commit/cf8e8ee)) |
| feature |  **autocomplete:** add panelClass default option ([#20429](https://github.com/angular/components/issues/20429)) ([3c2334c](https://github.com/angular/components/commit/3c2334c)) |
| feature |  **datepicker:** add viewChanged output to calendar ([#13759](https://github.com/angular/components/issues/13759)) ([#20468](https://github.com/angular/components/issues/20468)) ([dfdf5cf](https://github.com/angular/components/commit/dfdf5cf)) |
| feature |  **drag-drop:** add predicate function for whether an item can be sorted into an index ([#20389](https://github.com/angular/components/issues/20389)) ([d14d986](https://github.com/angular/components/commit/d14d986)), closes [#19436](https://github.com/angular/components/issues/19436) |
| feature |  **stepper:** add theming support ([#20424](https://github.com/angular/components/issues/20424)) ([e545b56](https://github.com/angular/components/commit/e545b56)), closes [#20416](https://github.com/angular/components/issues/20416) |
| feature |  **tree:** add test harness for MatTree ([#20323](https://github.com/angular/components/issues/20323)) ([5916800](https://github.com/angular/components/commit/5916800)) |
| refactor |  remove month constants from core ([#18111](https://github.com/angular/components/issues/18111)) ([98d4799](https://github.com/angular/components/commit/98d4799)) |
| feature |  **input:** add test harnesses for native select and option ([ca464bd](https://github.com/angular/components/commit/ca464bd)) |

### youtube-player
|            |                       |
| ---------- | --------------------- |
| bug fix |  YT.Player is not a constructor ([#20616](https://github.com/angular/components/issues/20616)) ([b0d0388](https://github.com/angular/components/commit/b0d0388)), closes [#20598](https://github.com/angular/components/issues/20598) [angular#20598](https://github.com/angular/issues/20598) |

### google-maps

|            |                       |
| ---------- | --------------------- |
| bug fix |  allow ground overlay bounds to be changed ([#20873](https://github.com/angular/components/issues/20873)) ([19ef64a](https://github.com/angular/components/commit/19ef64a)), closes [#20865](https://github.com/angular/components/issues/20865) |
| bug fix |  maintain subscriptions across event targets ([#20897](https://github.com/angular/components/issues/20897)) ([ca04bce](https://github.com/angular/components/commit/ca04bce)), closes [#20873](https://github.com/angular/components/issues/20873) [#20873](https://github.com/angular/components/issues/20873) |
| bug fix |  rendering blank if custom options with no zoom are provided ([#20882](https://github.com/angular/components/issues/20882)) ([0b9160b](https://github.com/angular/components/commit/0b9160b)) |

### cdk-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **combobox:** not cleaning up overlay on destroy ([#20407](https://github.com/angular/components/issues/20407)) ([6d1a259](https://github.com/angular/components/commit/6d1a259)) |
| feature |  **menu:** add ability to open menus from a standalone trigger ([#20363](https://github.com/angular/components/issues/20363)) ([de98466](https://github.com/angular/components/commit/de98466)) |
| feature |  **menu:** add smart aim functionality to the menu ([#20442](https://github.com/angular/components/issues/20442)) ([fb8721a](https://github.com/angular/components/commit/fb8721a)) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **mdc-button:** narrow down overly-broad selector ([#20969](https://github.com/angular/components/issues/20969)) ([17ef700](https://github.com/angular/components/commit/17ef700)) |
| bug fix |  **mdc-slide-toggle:** hide native focus outline ([#20964](https://github.com/angular/components/issues/20964)) ([8cb46a9](https://github.com/angular/components/commit/8cb46a9)) |
| feature |  **mdc-chips:** Allow custom role for ChipSet ([#20829](https://github.com/angular/components/issues/20829)) ([c54a3ac](https://github.com/angular/components/commit/c54a3ac)) |
| bug fix |  **mdc-checkbox:** fix broken dark theme ([#20940](https://github.com/angular/components/issues/20940)) ([f76578d](https://github.com/angular/components/commit/f76578d)) |
| bug fix |  **mdc-snack-bar:** add missing exports ([#20928](https://github.com/angular/components/issues/20928)) ([6add7fe](https://github.com/angular/components/commit/6add7fe)) |
| bug fix |  **mdc-card:** double outline in high contrast mode ([#20823](https://github.com/angular/components/issues/20823)) ([17de49c](https://github.com/angular/components/commit/17de49c)) |
| bug fix |  **mdc-chips:** add missing functionality and align tests ([#20814](https://github.com/angular/components/issues/20814)) ([de542df](https://github.com/angular/components/commit/de542df)) |
| bug fix |  **mdc-slide-toggle:** align focus behavior with standard version ([#20772](https://github.com/angular/components/issues/20772)) ([f854196](https://github.com/angular/components/commit/f854196)) |
| bug fix |  **mdc-form-field:** implement new methods added to text field adapter ([#20739](https://github.com/angular/components/issues/20739)) ([c3aa76e](https://github.com/angular/components/commit/c3aa76e)) |
| bug fix |  **mdc-form-field:** test harness referring to non-MDC harnesses ([#20762](https://github.com/angular/components/issues/20762)) ([02d334c](https://github.com/angular/components/commit/02d334c)) |
| bug fix |  **mdc-button:** align public API with material/button ([#20679](https://github.com/angular/components/issues/20679)) ([55b74e3](https://github.com/angular/components/commit/55b74e3)) |
| bug fix |  **mdc-core:** active option not visible in high contrast mode ([#20396](https://github.com/angular/components/issues/20396)) ([23b4c88](https://github.com/angular/components/commit/23b4c88)) |
| bug fix |  **mdc-core:** expose same symbols as material/core ([#20664](https://github.com/angular/components/issues/20664)) ([4f77679](https://github.com/angular/components/commit/4f77679)) |
| bug fix |  **mdc-core:** option text not centered on IE11 ([#20626](https://github.com/angular/components/issues/20626)) ([4b37b98](https://github.com/angular/components/commit/4b37b98)) |
| bug fix |  **mdc-dialog:** blending in with background in high contrast mode ([#20387](https://github.com/angular/components/issues/20387)) ([1219b1e](https://github.com/angular/components/commit/1219b1e)) |
| bug fix |  **mdc-form-field:** not adding mat-primary theme class ([#20605](https://github.com/angular/components/issues/20605)) ([d8def8b](https://github.com/angular/components/commit/d8def8b)) |
| bug fix |  **mdc-snack-bar:** button pushed outside container ([#20696](https://github.com/angular/components/issues/20696)) ([50d3f29](https://github.com/angular/components/commit/50d3f29)), closes [#20690](https://github.com/angular/components/issues/20690) |
| bug fix |  **mdc-snack-bar:** not aligned correctly on IE11 ([#20690](https://github.com/angular/components/issues/20690)) ([c9fcbef](https://github.com/angular/components/commit/c9fcbef)) |
| feature |  **mdc-paginator:** add test harness ([#20686](https://github.com/angular/components/issues/20686)) ([49a57bc](https://github.com/angular/components/commit/49a57bc)) |
| feature |  **mdc-paginator:** implement MDC-based paginator ([#20607](https://github.com/angular/components/issues/20607)) ([d87ae3c](https://github.com/angular/components/commit/d87ae3c)) |
| feature |  **mdc-select:** add test harness ([#20603](https://github.com/angular/components/issues/20603)) ([29e1f26](https://github.com/angular/components/commit/29e1f26)) |
| feature |  **mdc-select:** implement MDC-based mat-select ([#20502](https://github.com/angular/components/issues/20502)) ([7f08922](https://github.com/angular/components/commit/7f08922)) |


## 10.2.7 "carnelian mountain" (2020-11-02)

### material

|            |                       |
| ---------- | --------------------- |
| bug fix |  **icon:** not updating svg icon assigned through setter ([#20509](https://github.com/angular/components/issues/20509)) ([6b13154](https://github.com/angular/components/commit/6b13154)), closes [#20470](https://github.com/angular/components/issues/20470) |
| bug fix |  **list:** exclude icons from harness getText result ([#20845](https://github.com/angular/components/issues/20845)) ([8638456](https://github.com/angular/components/commit/8638456)), closes [#20812](https://github.com/angular/components/issues/20812) |

### google-maps

|            |                       |
| ---------- | --------------------- |
| bug fix |  maintain subscriptions across event targets ([#20897](https://github.com/angular/components/issues/20897)) ([38dc511](https://github.com/angular/components/commit/38dc511)), closes [#20873](https://github.com/angular/components/issues/20873) [#20873](https://github.com/angular/components/issues/20873) |
| bug fix |  rendering blank if custom options with no zoom are provided ([#20882](https://github.com/angular/components/issues/20882)) ([c9700df](https://github.com/angular/components/commit/c9700df)) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **mdc-checkbox:** fix broken dark theme ([#20940](https://github.com/angular/components/issues/20940)) ([15e4802](https://github.com/angular/components/commit/15e4802)) |
| bug fix |  **mdc-snack-bar:** add missing exports ([#20928](https://github.com/angular/components/issues/20928)) ([308dd24](https://github.com/angular/components/commit/308dd24)) |


## 10.2.6 "aluminum-mums" (2020-10-27)

### cdk

|            |                       |
| ---------- | --------------------- |
| bug fix |  **drag-drop:** error if dragging starts from active sibling container ([#20704](https://github.com/angular/components/issues/20704)) ([f85facf](https://github.com/angular/components/commit/f85facf)), closes [#20623](https://github.com/angular/components/issues/20623) |
| bug fix |  **drag-drop:** error when cloning file input with value ([#20793](https://github.com/angular/components/issues/20793)) ([ff5d09f](https://github.com/angular/components/commit/ff5d09f)), closes [#20783](https://github.com/angular/components/issues/20783) |
| bug fix |  **drag-drop:** references to SVG not working inside preview ([#20742](https://github.com/angular/components/issues/20742)) ([b371b51](https://github.com/angular/components/commit/b371b51)), closes [#20720](https://github.com/angular/components/issues/20720) |
| feature |  **scrolling:** update CdkVirtualForOf to work with sets. ([#20594](https://github.com/angular/components/issues/20594)) ([9ea3d01](https://github.com/angular/components/commit/9ea3d01)), closes [#20210](https://github.com/angular/components/issues/20210) |

### material

|            |                       |
| ---------- | --------------------- |
| bug fix |  **button:** add more prominent focus indication in high contrast mode ([#20821](https://github.com/angular/components/issues/20821)) ([1c39b72](https://github.com/angular/components/commit/1c39b72)), closes [#20820](https://github.com/angular/components/issues/20820) |
| bug fix |  **menu:** getLabel not working if text is inside indirect descendant node ([#20705](https://github.com/angular/components/issues/20705)) ([37bf838](https://github.com/angular/components/commit/37bf838)), closes [#20200](https://github.com/angular/components/issues/20200) |
| bug fix |  **slider:** some screen readers announcing long decimal values ([#20760](https://github.com/angular/components/issues/20760)) ([2226577](https://github.com/angular/components/commit/2226577)), closes [#20719](https://github.com/angular/components/issues/20719) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **mdc-slide-toggle:** align focus behavior with standard version ([#20772](https://github.com/angular/components/issues/20772)) ([77358cc](https://github.com/angular/components/commit/77358cc)) |


## 10.2.5 "ink-peony" (2020-10-15)

### material

|            |                       |
| ---------- | --------------------- |
| bug fix |  **autocomplete:** don't prevent escape key actions with modifiers ([#20706](https://github.com/angular/components/issues/20706)) ([9332230](https://github.com/angular/components/commit/9332230)), closes [#16202](https://github.com/angular/components/issues/16202) |
| bug fix |  **datepicker:** lifecycle hooks not being called ([#20700](https://github.com/angular/components/issues/20700)) ([6318389](https://github.com/angular/components/commit/6318389)) |
| bug fix |  **form-field:** dynamic hint end alignment not working ([#20657](https://github.com/angular/components/issues/20657)) ([95cc020](https://github.com/angular/components/commit/95cc020)), closes [#20629](https://github.com/angular/components/issues/20629) |
| bug fix |  **list:** emit selectionChange event when selecting with ctrl + a ([#20667](https://github.com/angular/components/issues/20667)) ([d10a20f](https://github.com/angular/components/commit/d10a20f)), closes [#15696](https://github.com/angular/components/issues/15696) |
| bug fix |  **slider:** some screen readers announcing long decimal values ([#20721](https://github.com/angular/components/issues/20721)) ([ad17eb9](https://github.com/angular/components/commit/ad17eb9)), closes [#20719](https://github.com/angular/components/issues/20719) |
| bug fix |  **tabs:** some bugs with docs and coercion ([#20356](https://github.com/angular/components/issues/20356)) ([f9547dd](https://github.com/angular/components/commit/f9547dd)) |
| bug fix |  **tooltip:** convert message to string ([#20685](https://github.com/angular/components/issues/20685)) ([214bc7b](https://github.com/angular/components/commit/214bc7b)), closes [#20684](https://github.com/angular/components/issues/20684) |


## 10.2.4 "thorium-thunder" (2020-10-05)

### cdk

|            |                       |
| ---------- | --------------------- |
| bug fix |  **a11y:** cdkAriaLive default to polite ([#20672](https://github.com/angular/components/issues/20672)) ([f514ae5](https://github.com/angular/components/commit/f514ae5)), closes [#11618](https://github.com/angular/components/issues/11618) |
| bug fix |  **a11y:** error if FocusMonitor is used on non-element nodes ([#20640](https://github.com/angular/components/issues/20640)) ([92c29c8](https://github.com/angular/components/commit/92c29c8)), closes [#20632](https://github.com/angular/components/issues/20632) |

### material

|            |                       |
| ---------- | --------------------- |
| bug fix |  **core:** incorrectly formatting dates in the years 0 to 99 ([#20612](https://github.com/angular/components/issues/20612)) ([9a0c4c0](https://github.com/angular/components/commit/9a0c4c0)), closes [#20418](https://github.com/angular/components/issues/20418) |
| bug fix |  **datepicker:** fix handling of short years ([#20709](https://github.com/angular/components/issues/20709)) ([8b4ce73](https://github.com/angular/components/commit/8b4ce73)) |

### youtube-player

|            |                       |
| ---------- | --------------------- |
| bug fix |  YT.Player is not a constructor ([#20616](https://github.com/angular/components/issues/20616)) ([3393ec7](https://github.com/angular/components/commit/3393ec7)), closes [#20598](https://github.com/angular/components/issues/20598) [angular#20598](https://github.com/angular/issues/20598) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **mdc-button:** align public API with material/button ([#20679](https://github.com/angular/components/issues/20679)) ([3a34ab0](https://github.com/angular/components/commit/3a34ab0)) |
| bug fix |  **mdc-snack-bar:** button pushed outside container ([#20696](https://github.com/angular/components/issues/20696)) ([c5fd98a](https://github.com/angular/components/commit/c5fd98a)), closes [#20690](https://github.com/angular/components/issues/20690) |
| bug fix |  **mdc-snack-bar:** not aligned correctly on IE11 ([#20690](https://github.com/angular/components/issues/20690)) ([e1ea7df](https://github.com/angular/components/commit/e1ea7df)) |


## 10.2.3 "polyester-pancake" (2020-09-28)

### cdk

|            |                       |
| ---------- | --------------------- |
| bug fix |  **table:** add fallback code if view repeater isn't provided ([#20604](https://github.com/angular/components/issues/20604)) ([bfb7e57](https://github.com/angular/components/commit/bfb7e57)), closes [#20601](https://github.com/angular/components/issues/20601) |


## 10.2.2 "cement-flower" (2020-09-21)

### cdk

|            |                       |
| ---------- | --------------------- |
| bug fix |  **tree:** remove FocusMonitor from CdkTreeModule providers ([#20493](https://github.com/angular/components/issues/20493)) ([7ec2ee5](https://github.com/angular/components/commit/7ec2ee5)) |

### material

|            |                       |
| ---------- | --------------------- |
| bug fix |  **button-toggle:** don't use divs inside button template ([#20390](https://github.com/angular/components/issues/20390)) ([95e48bb](https://github.com/angular/components/commit/95e48bb)), closes [#20376](https://github.com/angular/components/issues/20376) |
| bug fix |  **datepicker:** remove red shadow from invalid range inputs in Firefox ([#20489](https://github.com/angular/components/issues/20489)) ([bdc5aa3](https://github.com/angular/components/commit/bdc5aa3)), closes [#20483](https://github.com/angular/components/issues/20483) |
| bug fix |  **list/testing:** avoid element selectors that could conflict with the MDC version ([#20528](https://github.com/angular/components/issues/20528)) ([989463f](https://github.com/angular/components/commit/989463f)) |
| bug fix |  **radio:** take default tabindex value from attribute ([#20453](https://github.com/angular/components/issues/20453)) ([1f4d598](https://github.com/angular/components/commit/1f4d598)) |
| bug fix |  **tabs:** always defaulting focusIndex to 0 on initialization ([#20384](https://github.com/angular/components/issues/20384)) ([60a3527](https://github.com/angular/components/commit/60a3527)), closes [#20374](https://github.com/angular/components/issues/20374) |
| performance |  **drag-drop:** bind fewer touchmove listeners ([#20404](https://github.com/angular/components/issues/20404)) ([f7e0f31](https://github.com/angular/components/commit/f7e0f31)) |

### chips

|            |                       |
| ---------- | --------------------- |
| bug fix |  **testing:** exclude icons from getText result ([#20508](https://github.com/angular/components/issues/20508)) ([16f9f83](https://github.com/angular/components/commit/16f9f83)), closes [#20503](https://github.com/angular/components/issues/20503) |


## 10.2.1 "wooden-cowboy" (2020-09-14)

### cdk

|            |                       |
| ---------- | --------------------- |
| bug fix |  **table:** resolve breaking constructor changes ([#20425](https://github.com/angular/components/issues/20425)) ([fdd87b9](https://github.com/angular/components/commit/fdd87b9)), closes [#19964](https://github.com/angular/components/issues/19964) [#19750](https://github.com/angular/components/issues/19750) [#20422](https://github.com/angular/components/issues/20422) |
| bug fix |  **tree:** remove CdkTreeNodeDef from CdkTreeModules providers ([#20491](https://github.com/angular/components/issues/20491)) ([1887f80](https://github.com/angular/components/commit/1887f80)) |

### material

|            |                       |
| ---------- | --------------------- |
| bug fix |  **datepicker:** don't revalidate if new date object for same date is passed through input ([#20362](https://github.com/angular/components/issues/20362)) ([5dca925](https://github.com/angular/components/commit/5dca925)), closes [#19907](https://github.com/angular/components/issues/19907) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| feature |  bump peer dependency to MDC v8.0.0 canary ([#20527](https://github.com/angular/components/issues/20527)) ([1dd6edb](https://github.com/angular/components/commit/1dd6edb)) |


# 10.2.0 "cloth-shirt" (2020-09-02)

### cdk

|            |                       |
| ---------- | --------------------- |
| bug fix |  **overlay:** ensure error isn't thrown when many overlay items are closed from handler ([#20377](https://github.com/angular/components/issues/20377)) ([8ed5ba7](https://github.com/angular/components/commit/8ed5ba7)) |
| bug fix |  **testing:** fix change detection timing in testbed ([#20465](https://github.com/angular/components/issues/20465)) ([29468fa](https://github.com/angular/components/commit/29468fa)) |

### material

|            |                       |
| ---------- | --------------------- |
| bug fix |  **button:** don't use divs in button template ([#20376](https://github.com/angular/components/issues/20376)) ([ecde050](https://github.com/angular/components/commit/ecde050)) |
| bug fix |  **drag-drop:** expose some missing injection tokens ([#20410](https://github.com/angular/components/issues/20410)) ([a97b050](https://github.com/angular/components/commit/a97b050)), closes [#20406](https://github.com/angular/components/issues/20406) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **mdc-button:** double outline for FAB in high contrast mode ([#20391](https://github.com/angular/components/issues/20391)) ([80bc6cb](https://github.com/angular/components/commit/80bc6cb)) |


# 10.2.0-rc.0 "cotton-cactus" (2020-08-26)

### cdk

|            |                       |
| ---------- | --------------------- |
| feature |  add support for TypeScript 4.0 ([#20368](https://github.com/angular/components/issues/20368)) ([f33210c](https://github.com/angular/components/commit/f33210c)) |
| bug fix |  **a11y:** add parent node check to AriaDescriber ([#19951](https://github.com/angular/components/issues/19951)) ([16a3730](https://github.com/angular/components/commit/16a3730)), closes [#19949](https://github.com/angular/components/issues/19949) |
| bug fix |  **clipboard:** scroll position changing while copying on some browsers ([#20073](https://github.com/angular/components/issues/20073)) ([a6f1a33](https://github.com/angular/components/commit/a6f1a33)) |
| bug fix |  **drag-drop:** preserve checked state for grouped radio inputs ([#20237](https://github.com/angular/components/issues/20237)) ([8c336c9](https://github.com/angular/components/commit/8c336c9)), closes [#20236](https://github.com/angular/components/issues/20236) |
| bug fix |  **layout:** support readonly arrays for public methods ([#20252](https://github.com/angular/components/issues/20252)) ([e3699dc](https://github.com/angular/components/commit/e3699dc)) |
| bug fix |  **overlay:** ensure OverlayOutsideClickDispatcher listens to contextmenu events ([#20373](https://github.com/angular/components/issues/20373)) ([7a63ad6](https://github.com/angular/components/commit/7a63ad6)) |
| bug fix |  **overlay:** fix wrong overflow calculation ([#17791](https://github.com/angular/components/issues/17791)) ([d2b499d](https://github.com/angular/components/commit/d2b499d)) |
| bug fix |  **testing:** emit pointer events on hover and mouseAway ([#20098](https://github.com/angular/components/issues/20098)) ([a5274a9](https://github.com/angular/components/commit/a5274a9)) |
| feature |  **collections:** extract view repeater strategies from virtualForOf and CDK table. ([#19964](https://github.com/angular/components/issues/19964)) ([3b3b55f](https://github.com/angular/components/commit/3b3b55f)) |
| feature |  **testing:** add optional excludes to TestElement text method ([#20145](https://github.com/angular/components/issues/20145)) ([8eb6754](https://github.com/angular/components/commit/8eb6754)) |
| feature |  **testing:** add test harnesses for the datepicker module ([#20219](https://github.com/angular/components/issues/20219)) ([90d6b70](https://github.com/angular/components/commit/90d6b70)) |
| bug fix |  **testing:** filtering by regex not working ([#20148](https://github.com/angular/components/issues/20148)) ([20e5ea9](https://github.com/angular/components/commit/20e5ea9)) |


### material

_Deprecations:_

* **autocomplete:** * `AUTOCOMPLETE_OPTION_HEIGHT` is deprecated, because it isn't being used anymore.
* `AUTOCOMPLETE_PANEL_HEIGHT` is deprecated, because it isn't being used anymore.

|            |                       |
| ---------- | --------------------- |
| feature |  add support for TypeScript 4.0 ([#20368](https://github.com/angular/components/issues/20368)) ([f33210c](https://github.com/angular/components/commit/f33210c)) |
| bug fix |  **badge:** allow more data types for badge content ([#20331](https://github.com/angular/components/issues/20331)) ([75f73ae](https://github.com/angular/components/commit/75f73ae)), closes [#20326](https://github.com/angular/components/issues/20326) |
| bug fix |  **checkbox:** not handling unknown color palette ([#18467](https://github.com/angular/components/issues/18467)) ([64145fd](https://github.com/angular/components/commit/64145fd)), closes [#18465](https://github.com/angular/components/issues/18465) |
| bug fix |  **chips:** support readonly collections in inputs ([#20292](https://github.com/angular/components/issues/20292)) ([134cbf3](https://github.com/angular/components/commit/134cbf3)) |
| bug fix |  **core:** allow for default color and tabindex to be set per instance ([#20125](https://github.com/angular/components/issues/20125)) ([c4b7604](https://github.com/angular/components/commit/c4b7604)), closes [#18467](https://github.com/angular/components/issues/18467) |
| bug fix |  **datepicker:** add coercion for opened input ([#20250](https://github.com/angular/components/issues/20250)) ([490a893](https://github.com/angular/components/commit/490a893)) |
| bug fix |  **datepicker:** not showing single-day comparison ranges ([#20102](https://github.com/angular/components/issues/20102)) ([0433cd9](https://github.com/angular/components/commit/0433cd9)), closes [#20100](https://github.com/angular/components/issues/20100) |
| bug fix |  **datepicker:** range selection strategy not picking up custom date adapter ([#19914](https://github.com/angular/components/issues/19914)) ([984ca88](https://github.com/angular/components/commit/984ca88)), closes [#19902](https://github.com/angular/components/issues/19902) |
| bug fix |  **datepicker:** support dateClass on year and multi-year views ([#20256](https://github.com/angular/components/issues/20256)) ([2683b3d](https://github.com/angular/components/commit/2683b3d)), closes [#20017](https://github.com/angular/components/issues/20017) |
| bug fix |  **dialog:** backdrop not detaching if container view is destroyed ([#20232](https://github.com/angular/components/issues/20232)) ([199f728](https://github.com/angular/components/commit/199f728)) |
| bug fix |  **drag-drop:** remove redundant style changes from handle directive ([#20330](https://github.com/angular/components/issues/20330)) ([fc67ff3](https://github.com/angular/components/commit/fc67ff3)), closes [#19919](https://github.com/angular/components/issues/19919) |
| bug fix |  **form-field:** add a type check for userAriaDescribedBy ([7a2a732](https://github.com/angular/components/commit/7a2a732)) |
| bug fix |  **form-field:** fix form-field comment for google sync ([#20109](https://github.com/angular/components/issues/20109)) ([28f8edf](https://github.com/angular/components/commit/28f8edf)) |
| bug fix |  **input:** do not override existing aria-describedby value ([#19587](https://github.com/angular/components/issues/19587)) ([7d511ba](https://github.com/angular/components/commit/7d511ba)) |
| bug fix |  **list:** determine if option value changed ([#19828](https://github.com/angular/components/issues/19828)) ([#19870](https://github.com/angular/components/issues/19870)) ([f9c5ffe](https://github.com/angular/components/commit/f9c5ffe)) |
| bug fix |  **list:** don't redirect focus to first option on mouse focus ([#19889](https://github.com/angular/components/issues/19889)) ([22eca83](https://github.com/angular/components/commit/22eca83)), closes [#18948](https://github.com/angular/components/issues/18948) |
| bug fix |  **overlay:** only dispatch position change event if requested ([#19785](https://github.com/angular/components/issues/19785)) ([bbf5670](https://github.com/angular/components/commit/bbf5670)) |
| bug fix |  **platform:** detect and ignore scrollBehavior polyfills ([#20155](https://github.com/angular/components/issues/20155)) ([6569041](https://github.com/angular/components/commit/6569041)), closes [#17847](https://github.com/angular/components/issues/17847) |
| bug fix |  **portal:** running change detection before nodes have been moved to outlet ([#16407](https://github.com/angular/components/issues/16407)) ([a388cc3](https://github.com/angular/components/commit/a388cc3)), closes [#16346](https://github.com/angular/components/issues/16346) |
| bug fix |  **progress-spinner:** Progress spinner animation fails for floating point diameter values ([#20192](https://github.com/angular/components/issues/20192)) ([2c47b06](https://github.com/angular/components/commit/2c47b06)), closes [#20158](https://github.com/angular/components/issues/20158) |
| bug fix |  **scrolling:** virtual scroll not accounting for margin when measuring range ([#19852](https://github.com/angular/components/issues/19852)) ([a62a50a](https://github.com/angular/components/commit/a62a50a)), closes [#19851](https://github.com/angular/components/issues/19851) |
| bug fix |  **select:** emitting change event twice for reset values ([#13598](https://github.com/angular/components/issues/13598)) ([77b11f4](https://github.com/angular/components/commit/77b11f4)), closes [#10859](https://github.com/angular/components/issues/10859) [#10675](https://github.com/angular/components/issues/10675) [#13579](https://github.com/angular/components/issues/13579) |
| bug fix |  **select:** use combobox pattern for accessibility ([#20082](https://github.com/angular/components/issues/20082)) ([6fbf142](https://github.com/angular/components/commit/6fbf142)), closes [#11083](https://github.com/angular/components/issues/11083) |
| bug fix |  **sidenav:** run autosize debounce timer outside the NgZone ([#18898](https://github.com/angular/components/issues/18898)) ([27e3b9d](https://github.com/angular/components/commit/27e3b9d)), closes [#18894](https://github.com/angular/components/issues/18894) |
| bug fix |  **slider:** don't emit change events on mousedown ([#20240](https://github.com/angular/components/issues/20240)) ([ce72369](https://github.com/angular/components/commit/ce72369)), closes [#14363](https://github.com/angular/components/issues/14363) |
| bug fix |  **stepper:** parent stepper picking up steps from child stepper ([#18458](https://github.com/angular/components/issues/18458)) ([9d309f7](https://github.com/angular/components/commit/9d309f7)), closes [#18448](https://github.com/angular/components/issues/18448) |
| bug fix |  **stepper:** remove tabindex from content ([#16809](https://github.com/angular/components/issues/16809)) ([df7156e](https://github.com/angular/components/commit/df7156e)), closes [#14892](https://github.com/angular/components/issues/14892) [#16692](https://github.com/angular/components/issues/16692) |
| bug fix |  **table:** correctly sort columns with mixed data types ([21f2df3](https://github.com/angular/components/commit/21f2df3)), closes [#20149](https://github.com/angular/components/issues/20149) |
| bug fix |  **table:** incorrect padding for single-cell rows in rtl ([#20266](https://github.com/angular/components/issues/20266)) ([1f6b90c](https://github.com/angular/components/commit/1f6b90c)), closes [#20265](https://github.com/angular/components/issues/20265) |
| bug fix |  **table:** rename flex example ([#20316](https://github.com/angular/components/issues/20316)) ([3396b4b](https://github.com/angular/components/commit/3396b4b)) |
| bug fix |  **tree:** Apply aria-level to all nodes ([#17818](https://github.com/angular/components/issues/17818)) ([aeb6f89](https://github.com/angular/components/commit/aeb6f89)) |
| feature |  **autocomplete:** support variable option height ([#20324](https://github.com/angular/components/issues/20324)) ([2058f71](https://github.com/angular/components/commit/2058f71)), closes [#18030](https://github.com/angular/components/issues/18030) |
| feature |  **chips:** add test harness ([#20028](https://github.com/angular/components/issues/20028)) ([165622e](https://github.com/angular/components/commit/165622e)) |
| feature |  **combobox:** add to dev-app ([#20276](https://github.com/angular/components/issues/20276)) ([f718821](https://github.com/angular/components/commit/f718821)) |
| feature |  **datepicker:** add `getValidDateOrNull` method ([#19915](https://github.com/angular/components/issues/19915)) ([f0e56f0](https://github.com/angular/components/commit/f0e56f0)) |
| feature |  **form-field:** expose label content element id for custom controls ([#18528](https://github.com/angular/components/issues/18528)) ([23818f5](https://github.com/angular/components/commit/23818f5)) |
| feature |  **icon:** add test harness ([#20072](https://github.com/angular/components/issues/20072)) ([092b151](https://github.com/angular/components/commit/092b151)) |
| feature |  **mat-paginator:** Optionally style the mat-paginator form-field ([#18800](https://github.com/angular/components/issues/18800)) ([f9c6d2a](https://github.com/angular/components/commit/f9c6d2a)) |
| feature |  **stepper:** add test harness ([#20092](https://github.com/angular/components/issues/20092)) ([f343ded](https://github.com/angular/components/commit/f343ded)) |
| performance |  allow assertions to be removed in production mode ([#20146](https://github.com/angular/components/issues/20146)) ([79e4d28](https://github.com/angular/components/commit/79e4d28)) |
| performance |  **icon:** avoid unnecessarily parsing icon sets ([#18654](https://github.com/angular/components/issues/18654)) ([5526ab9](https://github.com/angular/components/commit/5526ab9)), closes [#18644](https://github.com/angular/components/issues/18644) |
| performance |  **table:** Do column name string interpolation once per column instead of once per cell ([#19801](https://github.com/angular/components/issues/19801)) ([bf953e9](https://github.com/angular/components/commit/bf953e9)) |
| performance |  **table:** Reduce calls to updateStickyColumnStyles ([#19739](https://github.com/angular/components/issues/19739)) ([f484e96](https://github.com/angular/components/commit/f484e96)) |
| performance |  **table:** Slightly improve speed of adding/remvoing sticky styles ([#19823](https://github.com/angular/components/issues/19823)) ([1b1c31e](https://github.com/angular/components/commit/1b1c31e)) |
| performance |  **tooltip:** Hook up to pointer leave events when pointer enter events fire ([#19777](https://github.com/angular/components/issues/19777)) ([04b7523](https://github.com/angular/components/commit/04b7523)) |

### google-maps

|            |                       |
| ---------- | --------------------- |
| bug fix |  avoid re-initializing info window for same marker ([#19299](https://github.com/angular/components/issues/19299)) ([90f4d0e](https://github.com/angular/components/commit/90f4d0e)) |
| feature |  Add KML Layer component to Google Maps ([#19226](https://github.com/angular/components/issues/19226)) ([2b00725](https://github.com/angular/components/commit/2b00725)) |
| feature |  Add Layer components. ([#19604](https://github.com/angular/components/issues/19604)) ([3345a9a](https://github.com/angular/components/commit/3345a9a)) |

### cdk-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **menu:** do not allow two separate triggers to open the same menu ([#20300](https://github.com/angular/components/issues/20300)) ([6948186](https://github.com/angular/components/commit/6948186)) |
| bug fix |  **menu:** ensure context menu is closed out with other menu elements on page ([#20234](https://github.com/angular/components/issues/20234)) ([beaf072](https://github.com/angular/components/commit/beaf072)) |
| bug fix |  **menu:** ensure menu is closed out when clicking on an inline menu item ([#20241](https://github.com/angular/components/issues/20241)) ([c7a7b1e](https://github.com/angular/components/commit/c7a7b1e)) |
| bug fix |  **menu:** fix double state toggle in radio and checkbox menu items ([#20259](https://github.com/angular/components/issues/20259)) ([c0499b8](https://github.com/angular/components/commit/c0499b8)) |
| bug fix |  **menu:** re-open menu on hover after click to close on trigger ([#20173](https://github.com/angular/components/issues/20173)) ([ecb6e38](https://github.com/angular/components/commit/ecb6e38)) |
| feature |  **combobox:** add combobox base ([#20211](https://github.com/angular/components/issues/20211)) ([6184328](https://github.com/angular/components/commit/6184328)) |
| feature |  **combobox:** added additional open actions and a combobox-popup directive ([#20306](https://github.com/angular/components/issues/20306)) ([809f157](https://github.com/angular/components/commit/809f157)) |
| feature |  **combobox:** created combobox file skeleton. ([fbfe4cb](https://github.com/angular/components/commit/fbfe4cb)), closes [#20185](https://github.com/angular/components/issues/20185) |
| feature |  **combobox:** make CdkListbox compatible with CdkCombobox ([#20291](https://github.com/angular/components/issues/20291)) ([23d3c21](https://github.com/angular/components/commit/23d3c21)) |
| feature |  **menu:** add ability to close menus when clicking outside the menu tree ([#20064](https://github.com/angular/components/issues/20064)) ([2980b07](https://github.com/angular/components/commit/2980b07)) |
| feature |  **menu:** add context menu trigger directive ([#20144](https://github.com/angular/components/issues/20144)) ([d945b27](https://github.com/angular/components/commit/d945b27)) |
| feature |  **menu:** add roving tab index to menu items ([#20235](https://github.com/angular/components/issues/20235)) ([75042e4](https://github.com/angular/components/commit/75042e4)) |
| feature |  **menu:** add support for inline menus ([#20143](https://github.com/angular/components/issues/20143)) ([8b68083](https://github.com/angular/components/commit/8b68083)) |
| feature |  **menu:** add the ability to open/close menus on mouse click and hover ([#20118](https://github.com/angular/components/issues/20118)) ([cdbf2c1](https://github.com/angular/components/commit/cdbf2c1)) |
| feature |  **menu:** enable keyboard handling for context menu ([#20171](https://github.com/angular/components/issues/20171)) ([0b5eaa8](https://github.com/angular/components/commit/0b5eaa8)) |
| feature |  **selection:** Merge cdk–selection to the master ([#20229](https://github.com/angular/components/issues/20229)) ([ebb3998](https://github.com/angular/components/commit/ebb3998)), closes [#18424](https://github.com/angular/components/issues/18424) [#18620](https://github.com/angular/components/issues/18620) [#19945](https://github.com/angular/components/issues/19945) |
| performance |  **column-resize:** Coalesce style updates along with sticky styler ([#20086](https://github.com/angular/components/issues/20086)) ([e2bc083](https://github.com/angular/components/commit/e2bc083)) |
| performance |  **column-resize:** Further defer initial min/max column size application to reduce layout thrashing ([#20238](https://github.com/angular/components/issues/20238)) ([3ce4452](https://github.com/angular/components/commit/3ce4452)) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **mdc-core:** set up strong focus indication for MDC-based option ([#20354](https://github.com/angular/components/issues/20354)) ([9a4adb7](https://github.com/angular/components/commit/9a4adb7)) |
| bug fix |  **mdc-menu:** apply typography to button menu items ([#20169](https://github.com/angular/components/issues/20169)) ([8fb560f](https://github.com/angular/components/commit/8fb560f)) |
| bug fix |  **mdc-menu/testing:** add unimplemented methods ([#20352](https://github.com/angular/components/issues/20352)) ([e784f8f](https://github.com/angular/components/commit/e784f8f)) |
| bug fix |  **mdc-table:** reset table layout ([#20364](https://github.com/angular/components/issues/20364)) ([55f7882](https://github.com/angular/components/commit/55f7882)) |
| feature |  add MDC-based mat-option and mdc-core entry point ([#19557](https://github.com/angular/components/issues/19557)) ([d1607cb](https://github.com/angular/components/commit/d1607cb)) |
| feature |  MDC-based version of dialog ([d137848](https://github.com/angular/components/commit/d137848)) |
| feature |  **mdc-autocomplete:** implement MDC-based mat-autocomplete ([#20247](https://github.com/angular/components/issues/20247)) ([c8f03c7](https://github.com/angular/components/commit/c8f03c7)) |
| feature |  **mdc-card:** add test harness ([#20298](https://github.com/angular/components/issues/20298)) ([b69a75b](https://github.com/angular/components/commit/b69a75b)) |
| feature |  **mdc-list:** implement selection list ([#20279](https://github.com/angular/components/issues/20279)) ([fe14d88](https://github.com/angular/components/commit/fe14d88)) |
| feature |  **mdc-radio:** add test harness ([#20283](https://github.com/angular/components/issues/20283)) ([68b4374](https://github.com/angular/components/commit/68b4374)) |
| feature |  **mdc-snack-bar:** add test harness ([#20366](https://github.com/angular/components/issues/20366)) ([4aa8718](https://github.com/angular/components/commit/4aa8718)) |
| feature |  **mdc-table:** add test harnesses ([#20319](https://github.com/angular/components/issues/20319)) ([8809084](https://github.com/angular/components/commit/8809084)) |
| feature |  **mdc-tabs:** add test harnesses ([#20322](https://github.com/angular/components/issues/20322)) ([3854b66](https://github.com/angular/components/commit/3854b66)) |
| feature |  **menubar:** extends components from cdk menu equivalents ([#20301](https://github.com/angular/components/issues/20301)) ([fd2976f](https://github.com/angular/components/commit/fd2976f)) |
| feature |  **menubar:** update the dev-app to include a fake mat-menu ([#20365](https://github.com/angular/components/issues/20365)) ([06a9843](https://github.com/angular/components/commit/06a9843)) |
| feature |  **mdc-core:** add test harnesses for MDC option and option group ([2d4cab2](https://github.com/angular/components/commit/2d4cab2)) |

## 10.1.1 "tin-hat" (2020-07-27)

### cdk

|            |                       |
| ---------- | --------------------- |
| bug fix |  **a11y:** interactivity checker detecting tabbable state incorrectly for videos, audio and object elements ([2825a9b](https://github.com/angular/components/commit/2825a9b)) |
| bug fix |  **drag-drop:** warn if connected container ID doesn't exist ([#20057](https://github.com/angular/components/issues/20057)) ([4fa9eb9](https://github.com/angular/components/commit/4fa9eb9)), closes [#20056](https://github.com/angular/components/issues/20056) |
| bug fix |  **drag-drop:** not transferring input value when cloning element for preview ([#20009](https://github.com/angular/components/issues/20009)) ([9833eea](https://github.com/angular/components/commit/9833eea)), closes [#19905](https://github.com/angular/components/issues/19905) |
| bug fix |  **scrolling:** viewport ruler events being run inside zone ([#15814](https://github.com/angular/components/issues/15814)) ([200ca35](https://github.com/angular/components/commit/200ca35)), closes [#18471](https://github.com/angular/components/issues/18471) |

### material

|            |                       |
| ---------- | --------------------- |
| bug fix |  **datepicker:** emitting dateChange event when opposite range input changes ([#19995](https://github.com/angular/components/issues/19995)) ([d383bba](https://github.com/angular/components/commit/d383bba)), closes [#19968](https://github.com/angular/components/issues/19968) |
| bug fix |  **select:** indicating programmatic value change as user interaction in some cases ([#19970](https://github.com/angular/components/issues/19970)) ([88d8416](https://github.com/angular/components/commit/88d8416)), closes [#19967](https://github.com/angular/components/issues/19967) |
| bug fix |  tabindex inputs not supporting coercion ([#20037](https://github.com/angular/components/issues/20037)) ([ec5986c](https://github.com/angular/components/commit/ec5986c)), closes [#20026](https://github.com/angular/components/issues/20026) |
| bug fix |  **datepicker:** not updating calendar state if input changes while open ([#19973](https://github.com/angular/components/issues/19973)) ([8b48a9b](https://github.com/angular/components/commit/8b48a9b)), closes [#19959](https://github.com/angular/components/issues/19959) |
| bug fix |  **menu:** throw error if menu contains its own trigger ([#19943](https://github.com/angular/components/issues/19943)) ([16e8376](https://github.com/angular/components/commit/16e8376)), closes [#19941](https://github.com/angular/components/issues/19941) |
| bug fix |  **table:** no data row not shown if data source is empty on init ([#19994](https://github.com/angular/components/issues/19994)) ([392e384](https://github.com/angular/components/commit/392e384)), closes [#19992](https://github.com/angular/components/issues/19992) |

### cdk-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **menu:** fix bug preventing keyboard event handling if opened programmatically ([#20004](https://github.com/angular/components/issues/20004)) ([d7954d6](https://github.com/angular/components/commit/d7954d6)) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **mdc-snack-bar:** blending in with background in high contrast mode ([#19996](https://github.com/angular/components/issues/19996)) ([7b2d6b0](https://github.com/angular/components/commit/7b2d6b0)) |
| bug fix |  **mdc-tabs:** missing focus indication in high contrast mode ([#17601](https://github.com/angular/components/issues/17601)) ([ec87358](https://github.com/angular/components/commit/ec87358)) |


# 10.1.0 "plastic-vault" (2020-07-20)

### cdk

|            |                       |
| ---------- | --------------------- |
| bug fix |  **a11y:** focus trap directive not capturing focus if auto capture input is set after init ([#19689](https://github.com/angular/components/issues/19689)) ([1acc608](https://github.com/angular/components/commit/1acc608)), closes [#19664](https://github.com/angular/components/issues/19664) |
| bug fix |  **a11y:** list key manager not emitting change event if new item is added to active index ([#19666](https://github.com/angular/components/issues/19666)) ([3fbebe0](https://github.com/angular/components/commit/3fbebe0)), closes [#19661](https://github.com/angular/components/issues/19661) |
| bug fix |  **aria-describer:** messages not being read out in IE and Edge ([#12304](https://github.com/angular/components/issues/12304)) ([0e22019](https://github.com/angular/components/commit/0e22019)), closes [#12298](https://github.com/angular/components/issues/12298) |
| bug fix |  **drag-drop:** pointer position calculation for SVG with viewBox ([#19863](https://github.com/angular/components/issues/19863)) ([78483bf](https://github.com/angular/components/commit/78483bf)) |
| bug fix |  **drag-drop:** allow handle to be set on drag element if there is a different drag root ([#19559](https://github.com/angular/components/issues/19559)) ([2335571](https://github.com/angular/components/commit/2335571)), closes [#19555](https://github.com/angular/components/issues/19555) |
| bug fix |  **drag-drop:** error when cloning 0x0 canvas ([#19707](https://github.com/angular/components/issues/19707)) ([3614a0b](https://github.com/angular/components/commit/3614a0b)) |
| bug fix |  **drag-drop:** not starting auto scroll when inside boundary ([#19865](https://github.com/angular/components/issues/19865)) ([39d48c7](https://github.com/angular/components/commit/39d48c7)), closes [#18596](https://github.com/angular/components/issues/18596) |
| bug fix |  **drag-drop:** placeholder element not available in started event ([#19493](https://github.com/angular/components/issues/19493)) ([bc88cc1](https://github.com/angular/components/commit/bc88cc1)), closes [#19457](https://github.com/angular/components/issues/19457) |
| bug fix |  **drag-drop:** sometimes incorrectly swapping items at the ends of the list ([#19633](https://github.com/angular/components/issues/19633)) ([0a6e4d6](https://github.com/angular/components/commit/0a6e4d6)), closes [#19249](https://github.com/angular/components/issues/19249) |
| bug fix |  **drag-drop:** update free drag position on scroll ([#19648](https://github.com/angular/components/issues/19648)) ([9d903e0](https://github.com/angular/components/commit/9d903e0)) |
| bug fix |  **platform:** rtl scroll axis incorrectly determined in Safari macOS ([#19830](https://github.com/angular/components/issues/19830)) ([0ddad07](https://github.com/angular/components/commit/0ddad07)), closes [#14609](https://github.com/angular/components/issues/14609) |
| bug fix |  **schematics:** errors when attempting to read some files ([#19783](https://github.com/angular/components/issues/19783)) ([00c5a53](https://github.com/angular/components/commit/00c5a53)), closes [#19779](https://github.com/angular/components/issues/19779) |
| bug fix |  **scrolling:** fixed-size-virtual-scroll wrong range and position when items length changes and current scroll is greater than new data length ([#19578](https://github.com/angular/components/issues/19578)) ([1d6ae58](https://github.com/angular/components/commit/1d6ae58)) |
| feature |  **a11y:** Add optional home/end key support to ListKeyManager ([#19834](https://github.com/angular/components/issues/19834)) ([544e335](https://github.com/angular/components/commit/544e335)) |
| feature |  **overlay:** support closing when clicking outside the overlay ([#16611](https://github.com/angular/components/issues/16611)) ([210d054](https://github.com/angular/components/commit/210d054)) |
| bug fix |  **overlay:** outside click dispatcher not accounting for shadow DOM ([#19904](https://github.com/angular/components/issues/19904)) ([7427b26](https://github.com/angular/components/commit/7427b26)) |
| bug fix |  **overlay:** overlay directives not emitting when detached externally ([#7950](https://github.com/angular/components/issues/7950)) ([4a3c960](https://github.com/angular/components/commit/4a3c960)) |
| feature |  **testing:** add base class for harnesses that may contain other harnesses ([#19944](https://github.com/angular/components/issues/19944)) ([6d2fb1f](https://github.com/angular/components/commit/6d2fb1f)) |
| feature |  **tree:** add trackBy to NestedTreeControl ([#19602](https://github.com/angular/components/issues/19602)) ([e2c7e1a](https://github.com/angular/components/commit/e2c7e1a)) |

### material

|            |                       |
| ---------- | --------------------- |
| bug fix |  **autocomplete:** don't close when clicking inside custom origin ([#19784](https://github.com/angular/components/issues/19784)) ([1319c0a](https://github.com/angular/components/commit/1319c0a)), closes [#19771](https://github.com/angular/components/issues/19771) |
| bug fix |  **button-toggle:** remove unused property and type ToggleType ([#19497](https://github.com/angular/components/issues/19497)) ([c225b28](https://github.com/angular/components/commit/c225b28)) |
| bug fix |  **datepicker:** add role to date range input ([#19717](https://github.com/angular/components/issues/19717)) ([cfe37d1](https://github.com/angular/components/commit/cfe37d1)) |
| bug fix |  **datepicker:** don't set aria-labelledby if form field does not have a label ([#19639](https://github.com/angular/components/issues/19639)) ([37e2171](https://github.com/angular/components/commit/37e2171)) |
| bug fix |  **datepicker:** label state not being updated in some cases ([#19761](https://github.com/angular/components/issues/19761)) ([fcfc224](https://github.com/angular/components/commit/fcfc224)) |
| bug fix |  **datepicker:** not marking as dirty when invalid value is typed in ([#19730](https://github.com/angular/components/issues/19730)) ([8934feb](https://github.com/angular/components/commit/8934feb)), closes [#19726](https://github.com/angular/components/issues/19726) |
| bug fix |  **datepicker:** range input separator not hidden in high contrast mode ([#19706](https://github.com/angular/components/issues/19706)) ([9af441d](https://github.com/angular/components/commit/9af441d)) |
| bug fix |  **dialog:** restore focus with the proper focus origin ([#9257](https://github.com/angular/components/issues/9257)) ([cf9bb1f](https://github.com/angular/components/commit/cf9bb1f)), closes [#8420](https://github.com/angular/components/issues/8420) |
| bug fix |  **focus indicators:** Improve styles that determine when focus indicators should render on selection controls. ([#19546](https://github.com/angular/components/issues/19546)) ([3d03bf3](https://github.com/angular/components/commit/3d03bf3)) |
| bug fix |  **form-field:** error in older versions of edge ([#19698](https://github.com/angular/components/issues/19698)) ([e1bfb92](https://github.com/angular/components/commit/e1bfb92)), closes [#17810](https://github.com/angular/components/issues/17810) |
| bug fix |  **input:** changed after checked error if input has static placeholder ([#20015](https://github.com/angular/components/issues/20015)) ([0d43581](https://github.com/angular/components/commit/0d43581)) |
| bug fix |  **input:** incorrectly handling nested themes ([#19637](https://github.com/angular/components/issues/19637)) ([da9c707](https://github.com/angular/components/commit/da9c707)) |
| bug fix |  **input:** placeholder being read out twice by some screen readers ([#10466](https://github.com/angular/components/issues/10466)) ([d05ba60](https://github.com/angular/components/commit/d05ba60)), closes [#9721](https://github.com/angular/components/issues/9721) |
| bug fix |  **list:** single selection list selected state not shown on touch devices ([#19877](https://github.com/angular/components/issues/19877)) ([2eff545](https://github.com/angular/components/commit/2eff545)), closes [#19876](https://github.com/angular/components/issues/19876) |
| bug fix |  **list:** use flexbox to size mat-line elements ([#19809](https://github.com/angular/components/issues/19809)) ([#19819](https://github.com/angular/components/issues/19819)) ([998bb18](https://github.com/angular/components/commit/998bb18)) |
| bug fix |  **ng-update:** properly handle update from different working directory ([05ec25f](https://github.com/angular/components/commit/05ec25f)), closes [#19779](https://github.com/angular/components/issues/19779) |
| bug fix |  **progress-spinner:** not respecting user colors in high contrast mode ([#19786](https://github.com/angular/components/issues/19786)) ([abc94c4](https://github.com/angular/components/commit/abc94c4)) |
| bug fix |  **sidenav:** restore focus if drawer is closed through backdrop click ([#19534](https://github.com/angular/components/issues/19534)) ([5ed1a00](https://github.com/angular/components/commit/5ed1a00)), closes [#17749](https://github.com/angular/components/issues/17749) |
| bug fix |  **snack-bar:** announcing same message twice to screen readers ([#14504](https://github.com/angular/components/issues/14504)) ([1bbfcf4](https://github.com/angular/components/commit/1bbfcf4)) |
| bug fix |  **sort:** sorted state being read out when navigating cells ([ea22e92](https://github.com/angular/components/commit/ea22e92)), closes [#13012](https://github.com/angular/components/issues/13012) |
| bug fix |  **tree:** allow use of FlatTreeControl's trackBy function in MatTreeFlatDataSource and MatTreeFlattener ([#19600](https://github.com/angular/components/issues/19600)) ([8ea3558](https://github.com/angular/components/commit/8ea3558)) |
| bug fix |  focus monitor-based styles not working in some cases inside shadow dom ([#19422](https://github.com/angular/components/issues/19422)) ([df981ee](https://github.com/angular/components/commit/df981ee)), closes [#19414](https://github.com/angular/components/issues/19414) |
| bug fix |  **testing:** harness selector not matching mat-spinner selector ([#19657](https://github.com/angular/components/issues/19657)) ([3ffcc63](https://github.com/angular/components/commit/3ffcc63)), closes [#19649](https://github.com/angular/components/issues/19649) |
| feature |  **schematics:** enable routing option ([#19439](https://github.com/angular/components/issues/19439)) ([31723b8](https://github.com/angular/components/commit/31723b8)) |
| feature |  **testing:** expose whether harness elements are focused ([#19704](https://github.com/angular/components/issues/19704)) ([081d833](https://github.com/angular/components/commit/081d833)), closes [#19702](https://github.com/angular/components/issues/19702) |
| feature |  **testing:** Add a test harness for `MatToolbar` ([#19976](https://github.com/angular/components/issues/19976)) ([9e97a34](https://github.com/angular/components/commit/9e97a34)) |
| feature |  **testing:** Add a test harness for `MatCard` ([#19833](https://github.com/angular/components/issues/19833)) ([54c2d16](https://github.com/angular/components/commit/54c2d16)) |
| performance |  **ink-bar:** Convert MatInkBarFoundation adapter to class object ([#19986](https://github.com/angular/components/issues/19986)) ([78dc50b](https://github.com/angular/components/commit/78dc50b)) |
| performance |  **tooltip:** Defer hooking up events until there's a message and the tooltip is not disabled ([#19764](https://github.com/angular/components/issues/19764)) ([49de56c](https://github.com/angular/components/commit/49de56c)) |


### google-maps

|            |                       |
| ---------- | --------------------- |
| bug fix |  allow for dimensions to be controlled through CSS ([#19790](https://github.com/angular/components/issues/19790)) ([e32e2e2](https://github.com/angular/components/commit/e32e2e2)) |
| bug fix |  rendering blank if custom options with no center are provided ([#19916](https://github.com/angular/components/issues/19916)) ([9ce2a90](https://github.com/angular/components/commit/9ce2a90)), closes [#19908](https://github.com/angular/components/issues/19908) |

### youtube-player

|            |                       |
| ---------- | --------------------- |
| feature |  support passing in the playerVars parameter ([#19746](https://github.com/angular/components/issues/19746)) ([cc36af7](https://github.com/angular/components/commit/cc36af7)), closes [#17672](https://github.com/angular/components/issues/17672) [#19267](https://github.com/angular/components/issues/19267) |

### cdk-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **menu:** Fix circular dependency ([09b33c2](https://github.com/angular/components/commit/09b33c2)) |
| feature |  **listbox:** add file skeleton ([#19612](https://github.com/angular/components/issues/19612)) ([0428231](https://github.com/angular/components/commit/0428231)) |
| feature |  **listbox:** multi-select and active descendant support ([#19929](https://github.com/angular/components/issues/19929)) ([7c49399](https://github.com/angular/components/commit/7c49399)) |
| feature |  **listbox:** selection logic and testing for listbox. ([#19690](https://github.com/angular/components/issues/19690)) ([2a97418](https://github.com/angular/components/commit/2a97418)) |
| feature |  **menu:** add functionality to navigate a Menu and MenuBar with a keyboard ([#19962](https://github.com/angular/components/issues/19962)) ([ffc6f4b](https://github.com/angular/components/commit/ffc6f4b)) |
| feature |  **menu:** Implement grouping logic for menuitems ([7a4b453](https://github.com/angular/components/commit/7a4b453)) |
| feature |  **menu:** implement menu handling logic ([#19701](https://github.com/angular/components/issues/19701)) ([b3d6d92](https://github.com/angular/components/commit/b3d6d92)) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **chips:** fix empty check when no chips ([#20025](https://github.com/angular/components/issues/20025)) ([ebda4de](https://github.com/angular/components/commit/ebda4de)) |
| bug fix |  **form-field:** fix notch width after appearance change ([#19682](https://github.com/angular/components/issues/19682)) ([5ef23ba](https://github.com/angular/components/commit/5ef23ba)) |
| bug fix |  strong focus indicator clipped in checkbox and radio button ([#19423](https://github.com/angular/components/issues/19423)) ([45492b6](https://github.com/angular/components/commit/45492b6)) |
| bug fix |  **mdc-form-field:** update input alignment to match spec ([f4f0d95](https://github.com/angular/components/commit/f4f0d95)) |
| bug fix |  **mdc-list:** fix infinite loop on init ([#19930](https://github.com/angular/components/issues/19930)) ([63da9e3](https://github.com/angular/components/commit/63da9e3)) |
| bug fix |  **mdc-snack-bar:** error during server-side rendering ([#19922](https://github.com/angular/components/issues/19922)) ([912ad8d](https://github.com/angular/components/commit/912ad8d)) |
| bug fix |  **mdc-snack-bar:** support dark themes ([#19926](https://github.com/angular/components/issues/19926)) ([a9e0ac5](https://github.com/angular/components/commit/a9e0ac5)) |
| bug fix |  **slide-toggle:** fix focus indictor position ([#19551](https://github.com/angular/components/issues/19551)) ([6c212b7](https://github.com/angular/components/commit/6c212b7)) |
| feature |  **mdc-chips:** Make chips editable by connecting to the mdc web editing interface ([#19618](https://github.com/angular/components/issues/19618)) ([04024fe](https://github.com/angular/components/commit/04024fe)) |
| feature |  **snack-bar:** add MDC-based snack-bar ([#19738](https://github.com/angular/components/issues/19738)) ([a63bfc5](https://github.com/angular/components/commit/a63bfc5)) |
| feature |  **snack-bar:** add MDC-based snack-bar ([#19800](https://github.com/angular/components/issues/19800)) ([7dcd2dd](https://github.com/angular/components/commit/7dcd2dd)) |


# 10.0.0 "ice-dice" (2020-06-24)

## Highlights
* A number of previously deprecated APIs have been removed (see below for more details).
* New date-range picker in `@angular/material`

## `node-sass` deprecation
Support for `node-sass` with Angular CDK and Angular Material is now deprecated in favor of the
newer and more actively supported `sass` package. Ending support for `node-sass` will allow use of
the new Sass module system, which offers a number of benefits over the existing import system.

### cdk

#### Breaking changes
* `CdkDropList.start` has been removed.
* `CdkDropList.drop` has been removed.
* `CdkDropList.enter` has been removed.
* `CdkDropList.exit` has been removed.
* `CdkDropList.getItemIndex` has been removed.
* `CDK_DRAG_CONFIG_FACTORY` has been removed.
* `CdkTable.setHeaderRowDef` has been removed. Use `CdkTable.addHeaderRowDef` and `CdkTable.removeHeaderRowDef` instead.
* `CdkTable.setFooterRowDef` has been removed. Use `CdkTable.addFooterRowDef` and `CdkTable.removeFooterRowDef` instead.
* The `_platformId` parameter in the `Platform` constructor is now required.
* The `copied` event from `cdkCopyToClipboard` has been renamed to `cdkCopyToClipboardCopied`.
* The `_ngZone` parameter in the `CdkCopyToClipboard` constructor is now required.

|            |                       |
| ---------- | --------------------- |
| bug fix |  **table:** project colgroup and col elements ([#18135](https://github.com/angular/components/issues/18135)) ([5b23084](https://github.com/angular/components/commit/5b23084)) |
| feature |  **tree:** support optional trackBy in FlatTreeControl ([#18708](https://github.com/angular/components/issues/18708)) ([04d1588](https://github.com/angular/components/commit/04d1588)) |
| bug fix |  **testing/testbed:** set defined event properties as configurable ([94571c5](https://github.com/angular/components/commit/94571c5)) |
| bug fix |  **testing/testbed:** synthetic DOM events cannot be prevented multiple times ([bde3af8](https://github.com/angular/components/commit/bde3af8)), closes [#19440](https://github.com/angular/components/issues/19440) |
| bug fix |  **drag-drop:** error during device emulation on firefox ([#19396](https://github.com/angular/components/issues/19396)) ([d309ee2](https://github.com/angular/components/commit/d309ee2)), closes [#19385](https://github.com/angular/components/issues/19385) |
| bug fix |  **drag-drop:** error when item enters from the top and last has an intermediate child ([#19361](https://github.com/angular/components/issues/19361)) ([fbd6440](https://github.com/angular/components/commit/fbd6440)), closes [#19116](https://github.com/angular/components/issues/19116) [#19359](https://github.com/angular/components/issues/19359) |
| feature |  **table:** add the ability to show a data row when no data is available ([#18041](https://github.com/angular/components/issues/18041)) ([e512581](https://github.com/angular/components/commit/e512581)) |
| bug fix |  **overlay:** remove potentially leaky observable ([#19146](https://github.com/angular/components/issues/19146)) ([27a812b](https://github.com/angular/components/commit/27a812b)), closes [#10573](https://github.com/angular/components/issues/10573) |

### material

#### Breaking changes
* `MAT_HAMMER_OPTIONS` has been removed.
* `GestureConfig` has been removed.
* `HammerInput` has been removed.
* `HammerStatic` has been removed.
* `Recognizer` has been removed.
* `RecognizerStatic` has been removed.
* `HammerInstance` has been removed.
* `HammerManager` has been removed.
* `HammerOptions` has been removed.
* `MatButtonToggleGroupMultiple` has been removed. Use `MatButtonToggleGroup` instead.
* `MatSlideToggleDefaultOptions.disableDragValue` has been removed.
* `MatSlideToggle.dragChange` has been removed.
* The `_ngZone` and `_dir` parameters have been removed from the `MatSlideToggle` constructor.
* The `_viewportRuler` parameter in the `MatAutocompleteTrigger` constructor is now required.
* The `_location` and `_errorHandler` parameters in the `MatIcon` constructor are now required.
* The `_errorHandler` parameter in the `MatIconRegistry` constructor is now required.
* The _ngZone and _document parameters in the `MatSlider` constructor are now required.
* The `_focusMonitor` and `_elementRef` parameters in the MatSortHeader constructor are now required.
* The `_hammerLoader` parameter has been removed from the MatTooltip constructor.

|            |                       |
| ---------- | --------------------- |
| bug fix |  **chips:** chip list overriding chip disabled value ([#19228](https://github.com/angular/components/issues/19228)) ([9be5156](https://github.com/angular/components/commit/9be5156)), closes [#19213](https://github.com/angular/components/issues/19213) |
| bug fix |  **dialog:** focus trap not attached if autoFocus is disabled ([#19251](https://github.com/angular/components/issues/19251)) ([5bb81e8](https://github.com/angular/components/commit/5bb81e8)), closes [#18826](https://github.com/angular/components/issues/18826) [#19246](https://github.com/angular/components/issues/19246) |
| bug fix |  **form-field:** add missing material common module ([#19093](https://github.com/angular/components/issues/19093)) ([ba521d2](https://github.com/angular/components/commit/ba521d2)) |
| bug fix |  **input:** avoid repeat accesses to check if element is a textarea ([#19115](https://github.com/angular/components/issues/19115)) ([f8d9c96](https://github.com/angular/components/commit/f8d9c96)) |
| bug fix |  **list:** selection list marked as touched when tabbing in ([#19177](https://github.com/angular/components/issues/19177)) ([7fde305](https://github.com/angular/components/commit/7fde305)), closes [#18445](https://github.com/angular/components/issues/18445) [#19171](https://github.com/angular/components/issues/19171) |
| bug fix |  **tabs:** don't prevent default space/enter action if action tab doesn't change ([#19207](https://github.com/angular/components/issues/19207)) ([b38c812](https://github.com/angular/components/commit/b38c812)), closes [#19190](https://github.com/angular/components/issues/19190) |
| feature |  **datepicker:** add date range picker ([#19125](https://github.com/angular/components/issues/19125)) ([96efaad](https://github.com/angular/components/commit/96efaad)), closes [#18090](https://github.com/angular/components/issues/18090) [#17363](https://github.com/angular/components/issues/17363) [#17497](https://github.com/angular/components/issues/17497) [#17766](https://github.com/angular/components/issues/17766) [#17363](https://github.com/angular/components/issues/17363) [#17942](https://github.com/angular/components/issues/17942) [#18159](https://github.com/angular/components/issues/18159) [#18213](https://github.com/angular/components/issues/18213) [#18247](https://github.com/angular/components/issues/18247) [#18278](https://github.com/angular/components/issues/18278) [#18292](https://github.com/angular/components/issues/18292) [#18369](https://github.com/angular/components/issues/18369) [#18404](https://github.com/angular/components/issues/18404) [#18531](https://github.com/angular/components/issues/18531) [#18630](https://github.com/angular/components/issues/18630) [#18660](https://github.com/angular/components/issues/18660) [#18753](https://github.com/angular/components/issues/18753) [#18819](https://github.com/angular/components/issues/18819) [#18874](https://github.com/angular/components/issues/18874) [#18884](https://github.com/angular/components/issues/18884) [#18943](https://github.com/angular/components/issues/18943) [#18936](https://github.com/angular/components/issues/18936) [#18980](https://github.com/angular/components/issues/18980) [#19031](https://github.com/angular/components/issues/19031) [#19098](https://github.com/angular/components/issues/19098) [#19088](https://github.com/angular/components/issues/19088) [#19111](https://github.com/angular/components/issues/19111) [#19174](https://github.com/angular/components/issues/19174) [#19088](https://github.com/angular/components/issues/19088) [#19179](https://github.com/angular/components/issues/19179) [#19176](https://github.com/angular/components/issues/19176) [#19187](https://github.com/angular/components/issues/19187) [#19211](https://github.com/angular/components/issues/19211) [#19219](https://github.com/angular/components/issues/19219) [#19239](https://github.com/angular/components/issues/19239) [#19170](https://github.com/angular/components/issues/19170) |
| feature |  **datepicker:** allow for the dropdown position to be customized ([#16698](https://github.com/angular/components/issues/16698)) ([9104a0b](https://github.com/angular/components/commit/9104a0b)), closes [#16550](https://github.com/angular/components/issues/16550) |
| feature |  **icon:** allow fetching icons with credentials ([#18896](https://github.com/angular/components/issues/18896)) ([77730e9](https://github.com/angular/components/commit/77730e9)), closes [#18871](https://github.com/angular/components/issues/18871) |
| bug fix |  **datepicker:** set color on range separator ([#19308](https://github.com/angular/components/issues/19308)) ([2f8b271](https://github.com/angular/components/commit/2f8b271)) |
| bug fix |  **expansion:** disable header height transition if noop animations is set ([#19373](https://github.com/angular/components/issues/19373)) ([189d98e](https://github.com/angular/components/commit/189d98e)) |
| feature |  report warning if duplicate theme styles are generated ([6095e29](https://github.com/angular/components/commit/6095e29)), closes [#19141](https://github.com/angular/components/issues/19141) |
| bug fix |  **dialog:** focus recapturing not accounting for autoFocus option ([#19356](https://github.com/angular/components/issues/19356)) ([72b0219](https://github.com/angular/components/commit/72b0219)), closes [#18826](https://github.com/angular/components/issues/18826) [#19350](https://github.com/angular/components/issues/19350) |
| bug fix |  **ng-add:** ng add [@angular](https://github.com/angular)/material fails in library projects ([#19164](https://github.com/angular/components/issues/19164)) ([822e3e0](https://github.com/angular/components/commit/822e3e0)) |
| bug fix |  **table:** incorrectly sticking multiple footer rows ([#19321](https://github.com/angular/components/issues/19321)) ([95007e5](https://github.com/angular/components/commit/95007e5)), closes [#19311](https://github.com/angular/components/issues/19311) |
| feature |  **tooltip/testing:** add test harness for mat-tooltip ([#19144](https://github.com/angular/components/issues/19144)) ([44accd6](https://github.com/angular/components/commit/44accd6)), closes [#16676](https://github.com/angular/components/issues/16676) |
| bug fix |  **datepicker:** placeholder not behaving correctly in legacy form field ([#19595](https://github.com/angular/components/issues/19595)) ([ec7219d](https://github.com/angular/components/commit/ec7219d)) |
| feature |  **mdc-list:** add list-option template ([#19327](https://github.com/angular/components/issues/19327)) ([c865136](https://github.com/angular/components/commit/c865136)) |
| feature |  **menu:** add input to add overlay pane classes ([#19547](https://github.com/angular/components/issues/19547)) ([5244a9f](https://github.com/angular/components/commit/5244a9f)) |
| bug fix |  **checkbox:** high contrast focus indication not working ([#19488](https://github.com/angular/components/issues/19488)) ([a95da92](https://github.com/angular/components/commit/a95da92)), closes [#19443](https://github.com/angular/components/issues/19443) |
| bug fix |  **checkbox:** pass aria-describedby through to input ([#19495](https://github.com/angular/components/issues/19495)) ([e1d85d2](https://github.com/angular/components/commit/e1d85d2)), closes [#19477](https://github.com/angular/components/issues/19477) |
| bug fix |  **datepicker:** compilation errors with ViewEngine ([#19516](https://github.com/angular/components/issues/19516)) ([00e2171](https://github.com/angular/components/commit/00e2171)) |
| bug fix |  **slider:** focus ring not matching theme color ([#19519](https://github.com/angular/components/issues/19519)) ([2a6a63c](https://github.com/angular/components/commit/2a6a63c)), closes [#19507](https://github.com/angular/components/issues/19507) |
| bug fix |  **datepicker:** date range overriding model value if both fields are changed at the same time ([#19593](https://github.com/angular/components/issues/19593)) ([e2a579a](https://github.com/angular/components/commit/e2a579a)), closes [#19588](https://github.com/angular/components/issues/19588) |
| bug fix |  **datepicker:** not revalidating after value is changed through the calendar ([#19695](https://github.com/angular/components/issues/19695)) ([10888f3](https://github.com/angular/components/commit/10888f3)) |
| bug fix |  **input/testing:** unable to set the value of inputs that don't respond to typing ([#18812](https://github.com/angular/components/issues/18812)) ([7e5802a](https://github.com/angular/components/commit/7e5802a)), closes [#18790](https://github.com/angular/components/issues/18790) |

### youtube-player

#### Breaking changes
* The `platformId` parameter of the `YouTubePlayer` constructor is now required.

|            |                       |
| ---------- | --------------------- |
| bug fix |  binding some event listeners too late ([#19429](https://github.com/angular/components/issues/19429)) ([d85732c](https://github.com/angular/components/commit/d85732c)), closes [#19408](https://github.com/angular/components/issues/19408) |

### google-maps

|            |                       |
| ---------- | --------------------- |
| feature |  add ground overlay component ([#19143](https://github.com/angular/components/issues/19143)) ([eba622a](https://github.com/angular/components/commit/eba622a)) |
| feature |  expose the underlying Google Maps objects. ([#18613](https://github.com/angular/components/issues/18613)) ([3e00f4c](https://github.com/angular/components/commit/3e00f4c)) |
| bug fix |  allow for ground overlay image to be changed ([#19306](https://github.com/angular/components/issues/19306)) ([485352e](https://github.com/angular/components/commit/485352e)) |
| bug fix |  allow different anchor objects for info window ([#19378](https://github.com/angular/components/issues/19378)) ([d0ab041](https://github.com/angular/components/commit/d0ab041)) |
| bug fix |  add exportAs to all directives ([#19522](https://github.com/angular/components/issues/19522)) ([6544de8](https://github.com/angular/components/commit/6544de8)), closes [#19462](https://github.com/angular/components/issues/19462) |

### cdk-experimental

|            |                       |
| ---------- | --------------------- |
| feature |  **menu:** Add menu skeleton and build scripts ([#19583](https://github.com/angular/components/issues/19583)) ([c7cadc3](https://github.com/angular/components/commit/c7cadc3)) |
| bug fix |  **column-resize:** not working inside OnPush component ([#19671](https://github.com/angular/components/issues/19671)) ([8ff9844](https://github.com/angular/components/commit/8ff9844)), closes [#19670](https://github.com/angular/components/issues/19670) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **mdc-form-field:** add setLabelRequired adapter ([#19284](https://github.com/angular/components/issues/19284)) ([7b42c7e](https://github.com/angular/components/commit/7b42c7e)) |
| bug fix |  **mdc-proggrss-bar:** better server-side rendering support ([#19036](https://github.com/angular/components/issues/19036)) ([5d25d1b](https://github.com/angular/components/commit/5d25d1b)) |
| feature |  **mdc-button:** support density scaling ([9500e75](https://github.com/angular/components/commit/9500e75)) |
| feature |  **mdc-checkbox:** support density scaling ([84f2c1a](https://github.com/angular/components/commit/84f2c1a)) |
| feature |  **mdc-chips:** support for density scaling ([ee1e181](https://github.com/angular/components/commit/ee1e181)) |
| feature |  **mdc-form-field:** support density scaling ([3bcdc5e](https://github.com/angular/components/commit/3bcdc5e)) |
| feature |  **mdc-radio:** support for density scaling ([c659664](https://github.com/angular/components/commit/c659664)) |
| feature |  **mdc-slide-toggle:** support density scaling ([feafb2b](https://github.com/angular/components/commit/feafb2b)) |
| feature |  **mdc-table:** support for density scaling ([e288558](https://github.com/angular/components/commit/e288558)) |
| feature |  **mdc-tabs:** support for density scaling ([90d294b](https://github.com/angular/components/commit/90d294b)) |
| bug fix |  **mdc-slider:** remove slider theme from all-theme ([#19411](https://github.com/angular/components/issues/19411)) ([d952a22](https://github.com/angular/components/commit/d952a22)) |
| bug fix |  **mdc-chips:** removing chip on any key press ([#19425](https://github.com/angular/components/issues/19425)) ([ee63f63](https://github.com/angular/components/commit/ee63f63)) |
| bug fix |  **mdc-radio:** avoid hard references to base material components ([#19403](https://github.com/angular/components/issues/19403)) ([fb9174a](https://github.com/angular/components/commit/fb9174a)) |
| bug fix |  **mdc-form-field:** do not show focus overlay when disabled ([6bf7f24](https://github.com/angular/components/commit/6bf7f24)) |
| bug fix |  **mdc-form-field:** show required asterisk for disabled fields ([e3413ba](https://github.com/angular/components/commit/e3413ba)), closes [#19410](https://github.com/angular/components/issues/19410) |
| bug fix |  **mdc-menu:** missing padding after latest canary release ([#19548](https://github.com/angular/components/issues/19548)) ([b618a96](https://github.com/angular/components/commit/b618a96)) |
| bug fix |  **mdc-slide-toggle:** fix focus indicator position ([#19551](https://github.com/angular/components/issues/19551)) ([6c212b7](https://github.com/angular/components/commit/6c212b7)) |
| bug fix |  **mdc-menu:** menu items missing padding ([#19634](https://github.com/angular/components/issues/19634)) ([9b8baa6](https://github.com/angular/components/commit/9b8baa6)), closes [#19548](https://github.com/angular/components/issues/19548) |
| bug fix |  **popover-edit:** closing instantly when opening with enter key ([#18444](https://github.com/angular/components/issues/18444)) ([23b9145](https://github.com/angular/components/commit/23b9145)), closes [#18194](https://github.com/angular/components/issues/18194) |
| feature |  **mdc-list:** add MDC foundation for action/nav list ([#19601](https://github.com/angular/components/issues/19601)) ([5f15763](https://github.com/angular/components/commit/5f15763)) |



## 9.2.4 "aether-axiom" (2020-05-18)

### cdk

|            |                       |
| ---------- | --------------------- |
| bug fix |  **a11y:** focus monitor not checking children if monitor is called multiple times with different parameters ([#19237](https://github.com/angular/components/issues/19237)) ([07711b4](https://github.com/angular/components/commit/07711b4)), closes [/github.com/angular/components/pull/19135#discussion_r412471591](https://github.com//github.com/angular/components/pull/19135/issues/discussion_r412471591) [#19218](https://github.com/angular/components/issues/19218) |
| bug fix |  **overlay:** remove potentially leaky observable ([#19146](https://github.com/angular/components/issues/19146)) ([6f79527](https://github.com/angular/components/commit/6f79527)), closes [#10573](https://github.com/angular/components/issues/10573) |


### material

|            |                       |
| ---------- | --------------------- |
| bug fix |  **autocomplete:** incorrectly detecting shadow DOM when inserted through an embedded view ([#19332](https://github.com/angular/components/issues/19332)) ([8d79d73](https://github.com/angular/components/commit/8d79d73)) |
| bug fix |  **chips:** chip list overriding chip disabled value ([#19228](https://github.com/angular/components/issues/19228)) ([49be570](https://github.com/angular/components/commit/49be570)), closes [#19213](https://github.com/angular/components/issues/19213) |
| bug fix |  **dialog:** focus trap not attached if autoFocus is disabled ([#19251](https://github.com/angular/components/issues/19251)) ([e61deb9](https://github.com/angular/components/commit/e61deb9)), closes [#18826](https://github.com/angular/components/issues/18826) [#19246](https://github.com/angular/components/issues/19246) |
| bug fix |  **form-field:** add missing material common module ([#19093](https://github.com/angular/components/issues/19093)) ([8e9e1fb](https://github.com/angular/components/commit/8e9e1fb)) |
| bug fix |  **icon:** cancel in-flight icon requests if the icon changes ([#19303](https://github.com/angular/components/issues/19303)) ([bef4e80](https://github.com/angular/components/commit/bef4e80)) |
| bug fix |  **input:** avoid repeat accesses to check if element is a textarea ([#19115](https://github.com/angular/components/issues/19115)) ([8688dd8](https://github.com/angular/components/commit/8688dd8)) |
| bug fix |  **list:** selection list marked as touched when tabbing in ([#19177](https://github.com/angular/components/issues/19177)) ([2e7dc62](https://github.com/angular/components/commit/2e7dc62)), closes [#18445](https://github.com/angular/components/issues/18445) [#19171](https://github.com/angular/components/issues/19171) |
| bug fix |  **tabs:** don't prevent default space/enter action if action tab doesn't change ([#19207](https://github.com/angular/components/issues/19207)) ([7a4128b](https://github.com/angular/components/commit/7a4128b)), closes [#19190](https://github.com/angular/components/issues/19190) |
| bug fix |  **text-field:** unable to undo/redo in autosized text field on firefox ([#19238](https://github.com/angular/components/issues/19238)) ([7e1fd89](https://github.com/angular/components/commit/7e1fd89)) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **column-resize:** Resize table as well as columns, improve handing … ([#19264](https://github.com/angular/components/issues/19264)) ([87b8edb](https://github.com/angular/components/commit/87b8edb)) |
| bug fix |  **form-field:** add setLabelRequired adapter ([#19284](https://github.com/angular/components/issues/19284)) ([e43f4ac](https://github.com/angular/components/commit/e43f4ac)) |
| bug fix |  **mdc-list:** properly render leading and trailing icons on list items ([#19201](https://github.com/angular/components/issues/19201)) ([ce136a9](https://github.com/angular/components/commit/ce136a9)) |


## 9.2.3 "chalk-hawk" (2020-05-07)

### cdk

|            |                       |
| ---------- | --------------------- |
| bug fix |  **testing:** Make harnesses click on the center of the element by default ([#19212](https://github.com/angular/components/issues/19212)) ([26f3f57](https://github.com/angular/components/commit/26f3f57)) |

### material

|            |                       |
| ---------- | --------------------- |
| bug fix |  **datepicker:** double role definition on calendar cell ([#17297](https://github.com/angular/components/issues/17297)) ([d270bf6](https://github.com/angular/components/commit/d270bf6)), closes [#17280](https://github.com/angular/components/issues/17280) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **mdc-form-field:** native select option blending in with background on dark themes ([#19232](https://github.com/angular/components/issues/19232)) ([7e63f4a](https://github.com/angular/components/commit/7e63f4a)) |
| feature |  **mdc-form-field:** expose `MAT_FORM_FIELD` injection token ([#19277](https://github.com/angular/components/issues/19277)) ([5e9ac1c](https://github.com/angular/components/commit/5e9ac1c)) |
| feature |  **mdc-list:** add support for focus/hover states and ripples ([#19168](https://github.com/angular/components/issues/19168)) ([9f3bba3](https://github.com/angular/components/commit/9f3bba3)) |

## 9.2.2 "graphite-graviton" (2020-04-30)

### cdk

|            |                       |
| ---------- | --------------------- |
| bug fix |  **testing/testbed:** emit pointer events for test element click ([d7b1bbe](https://github.com/angular/components/commit/d7b1bbe)) |

### material

|            |                       |
| ---------- | --------------------- |
| bug fix |  **a11y:** focus monitor not working inside shadow dom ([#19135](https://github.com/angular/components/issues/19135)) ([e7bfb47](https://github.com/angular/components/commit/e7bfb47)), closes [#18667](https://github.com/angular/components/issues/18667) [#19133](https://github.com/angular/components/issues/19133) |
| bug fix |  **button-toggle:** static checked value not being picked up ([#18442](https://github.com/angular/components/issues/18442)) ([1daada5](https://github.com/angular/components/commit/1daada5)), closes [#18427](https://github.com/angular/components/issues/18427) |
| bug fix |  **autocomplete:** incorrect options from harness if multiple panels are on the page at the same time ([#19114](https://github.com/angular/components/issues/19114)) ([fd46ca3](https://github.com/angular/components/commit/fd46ca3)) |
| bug fix |  **chips:** chip list disabled state out of sync when swapping out form group with a disabled one ([#17993](https://github.com/angular/components/issues/17993)) ([f4bec43](https://github.com/angular/components/commit/f4bec43)), closes [#17872](https://github.com/angular/components/issues/17872) |
| bug fix |  **components-examples:** rename example component to follow naming convention for autoloading in docs ([#19142](https://github.com/angular/components/issues/19142)) ([9c8e87e](https://github.com/angular/components/commit/9c8e87e)) |
| bug fix |  **datepicker:** inconsistent focus restoration timing in touchUi mode ([#17732](https://github.com/angular/components/issues/17732)) ([d199500](https://github.com/angular/components/commit/d199500)), closes [#17560](https://github.com/angular/components/issues/17560) |
| bug fix |  **dialog:** incorrect dialog state for close animation ([#19034](https://github.com/angular/components/issues/19034)) ([fd0217d](https://github.com/angular/components/commit/fd0217d)) |
| bug fix |  **drag-drop:** boundary not accounting for parent scrolling ([#19108](https://github.com/angular/components/issues/19108)) ([548a58a](https://github.com/angular/components/commit/548a58a)), closes [#19086](https://github.com/angular/components/issues/19086) |
| bug fix |  **drag-drop:** drop-list wrong enter position ([#19116](https://github.com/angular/components/issues/19116)) ([12c705a](https://github.com/angular/components/commit/12c705a)) |
| bug fix |  **drag-drop:** expose Point interface ([#19051](https://github.com/angular/components/issues/19051)) ([9383364](https://github.com/angular/components/commit/9383364)), closes [#19001](https://github.com/angular/components/issues/19001) |
| bug fix |  **drag-drop:** preview matchSize sometimes incorrect inside flex container ([#19062](https://github.com/angular/components/issues/19062)) ([a65872d](https://github.com/angular/components/commit/a65872d)), closes [#19060](https://github.com/angular/components/issues/19060) |
| bug fix |  **drag-drop:** unable to start dragging in list if dragged item is destroyed ([#19055](https://github.com/angular/components/issues/19055)) ([72fe1e4](https://github.com/angular/components/commit/72fe1e4)), closes [#18628](https://github.com/angular/components/issues/18628) |
| bug fix |  **list:** don't select disabled options when pressing ctrl + a ([#18885](https://github.com/angular/components/issues/18885)) ([087ed4a](https://github.com/angular/components/commit/087ed4a)) |
| bug fix |  **overlay:** expand flexible origin type to allow SVG elements ([#19199](https://github.com/angular/components/issues/19199)) ([bee88e1](https://github.com/angular/components/commit/bee88e1)), closes [#36381](https://github.com/angular/components/issues/36381) |
| bug fix |  **platform:** avoid errors if ShadowRoot is not defined ([#19124](https://github.com/angular/components/issues/19124)) ([874c754](https://github.com/angular/components/commit/874c754)) |
| bug fix |  **select:** don't select active item when tabbing away while closed ([#18797](https://github.com/angular/components/issues/18797)) ([4307837](https://github.com/angular/components/commit/4307837)), closes [#18784](https://github.com/angular/components/issues/18784) |
| bug fix |  **select:** incorrect options from harness if multiple selects are on the page at the same time ([#19112](https://github.com/angular/components/issues/19112)) ([4fe5764](https://github.com/angular/components/commit/4fe5764)), closes [#19075](https://github.com/angular/components/issues/19075) |
| bug fix |  **tabs:** group alignment propagating to nested groups ([#19037](https://github.com/angular/components/issues/19037)) ([59a5786](https://github.com/angular/components/commit/59a5786)), closes [#19035](https://github.com/angular/components/issues/19035) |
| bug fix |  **tabs:** unnecessarily adding pagination when changing to new list of tabs with same labels ([#16869](https://github.com/angular/components/issues/16869)) ([d26ba73](https://github.com/angular/components/commit/d26ba73)), closes [#16789](https://github.com/angular/components/issues/16789) |
| bug fix |  **tree:** complete viewChange stream on destroy ([#18991](https://github.com/angular/components/issues/18991)) ([d7d3be1](https://github.com/angular/components/commit/d7d3be1)) |

### google-maps

|            |                       |
| ---------- | --------------------- |
| bug fix |  avoid runtime error on server ([8f36604](https://github.com/angular/components/commit/8f36604)) |
| bug fix |  incorrect variable access for server-side rendering check ([#19166](https://github.com/angular/components/issues/19166)) ([b5864ca](https://github.com/angular/components/commit/b5864ca)) |

### youtube-player

|            |                       |
| ---------- | --------------------- |
| bug fix |  unable to bind to events after initialization ([#18996](https://github.com/angular/components/issues/18996)) ([0695e82](https://github.com/angular/components/commit/0695e82)) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **mdc-form-field:** add  filled MDC text field class ([#19103](https://github.com/angular/components/issues/19103)) ([54c5633](https://github.com/angular/components/commit/54c5633)) |
| bug fix |  **mdc-progress-bar:** better server-side rendering support ([#19036](https://github.com/angular/components/issues/19036)) ([7a99cfa](https://github.com/angular/components/commit/7a99cfa)) |
| bug fix |  **mdc-button:** strong focus indication always visible on fab buttons ([#19169](https://github.com/angular/components/issues/19169)) ([11786b7](https://github.com/angular/components/commit/11786b7)) |
| bug fix |  **mdc-chips:** not disabling all animations when animations are disabled ([#18440](https://github.com/angular/components/issues/18440)) ([d25fe8b](https://github.com/angular/components/commit/d25fe8b)) |
| bug fix |  **mdc-form-field:** missing styles for native select controls ([#19140](https://github.com/angular/components/issues/19140)) ([90c1474](https://github.com/angular/components/commit/90c1474)) |
| bug fix |  **mdc-input:** avoid double event listeners in ivy ([#19052](https://github.com/angular/components/issues/19052)) ([2a4da91](https://github.com/angular/components/commit/2a4da91)) |
| bug fix |  **mdc-radio:** avoid bundling styles from base radio button ([#19032](https://github.com/angular/components/issues/19032)) ([4557d58](https://github.com/angular/components/commit/4557d58)) |
| bug fix |  **mdc-radio:** strong focus indicator not working ([#19091](https://github.com/angular/components/issues/19091)) ([b713104](https://github.com/angular/components/commit/b713104)) |
| bug fix |  **mdc-slide-toggle:** strong focus indication not visible ([#19048](https://github.com/angular/components/issues/19048)) ([a507873](https://github.com/angular/components/commit/a507873)), closes [#18895](https://github.com/angular/components/issues/18895) |
| bug fix |  **mdc-table:** not supporting multiple themes ([#18931](https://github.com/angular/components/issues/18931)) ([d564f6e](https://github.com/angular/components/commit/d564f6e)) |

## 9.2.1 "xenon-xenodochy" (2020-04-14)

### material

|            |                       |
| ---------- | --------------------- |
| bug fix |  **a11y:** avoid errors when trying to add high contrast class ([#18323](https://github.com/angular/components/issues/18323)) ([142c55e](https://github.com/angular/components/commit/142c55e)) |
| bug fix |  **a11y:** focus monitor incorrectly detecting fake mousedown… ([#15214](https://github.com/angular/components/issues/15214)) ([ac565a2](https://github.com/angular/components/commit/ac565a2)) |
| bug fix |  **autocomplete:** provide horizontal fallback positions ([#18906](https://github.com/angular/components/issues/18906)) ([3488dda](https://github.com/angular/components/commit/3488dda)), closes [#18854](https://github.com/angular/components/issues/18854) |
| bug fix |  **bottom-sheet:** allow result to be passed when dismissing through service ([#18831](https://github.com/angular/components/issues/18831)) ([48e26b1](https://github.com/angular/components/commit/48e26b1)) |
| bug fix |  **core:** ripple mutating global options when animations are… ([#18983](https://github.com/angular/components/issues/18983)) ([09f2872](https://github.com/angular/components/commit/09f2872)) |
| bug fix |  **datepicker:** add hover indication to navigation buttons ([#18995](https://github.com/angular/components/issues/18995)) ([94ab707](https://github.com/angular/components/commit/94ab707)), closes [/github.com/angular/components/blob/master/src/material/button/button.scss#L13](https://github.com//github.com/angular/components/blob/master/src/material/button/button.scss/issues/L13) [#18958](https://github.com/angular/components/issues/18958) |
| bug fix |  **datepicker:** disable calendar hover styles on touch devices ([#18876](https://github.com/angular/components/issues/18876)) ([d752cdf](https://github.com/angular/components/commit/d752cdf)) |
| bug fix |  **datepicker:** error in IE/Edge for static disabled binding ([#18202](https://github.com/angular/components/issues/18202)) ([80977f6](https://github.com/angular/components/commit/80977f6)) |
| bug fix |  **dialog:** recapture focus when clicking on backdrop when cl… ([#18826](https://github.com/angular/components/issues/18826)) ([c5ddfe8](https://github.com/angular/components/commit/c5ddfe8)), closes [#18799](https://github.com/angular/components/issues/18799) |
| bug fix |  **drag-drop:** allow preview z-index to be changed ([#18914](https://github.com/angular/components/issues/18914)) ([5c88e67](https://github.com/angular/components/commit/5c88e67)), closes [#18902](https://github.com/angular/components/issues/18902) |
| bug fix |  **drag-drop:** boundary not accounting for scrolling ([#18612](https://github.com/angular/components/issues/18612)) ([0401024](https://github.com/angular/components/commit/0401024)), closes [#18597](https://github.com/angular/components/issues/18597) |
| bug fix |  **drag-drop:** defer resolving scrollable parents until first drag ([#18918](https://github.com/angular/components/issues/18918)) ([ca263c3](https://github.com/angular/components/commit/ca263c3)), closes [#18737](https://github.com/angular/components/issues/18737) |
| bug fix |  **drag-drop:** handle custom preview/placeholder with multiple root nodes ([#18829](https://github.com/angular/components/issues/18829)) ([92aed70](https://github.com/angular/components/commit/92aed70)) |
| bug fix |  **expansion:** add strong focus indication ([#18552](https://github.com/angular/components/issues/18552)) ([6feff45](https://github.com/angular/components/commit/6feff45)) |
| bug fix |  **mat-button-toggle:** mat-button-toggle element should not h… ([#18746](https://github.com/angular/components/issues/18746)) ([709ac63](https://github.com/angular/components/commit/709ac63)) |
| bug fix |  **popover-edit:** hover content not showing up if content changes after init ([#18937](https://github.com/angular/components/issues/18937)) ([d7ff7cb](https://github.com/angular/components/commit/d7ff7cb)), closes [#18934](https://github.com/angular/components/issues/18934) |
| bug fix |  **popover-edit:** unable to close focus content using the keyboard ([#18945](https://github.com/angular/components/issues/18945)) ([e7a197a](https://github.com/angular/components/commit/e7a197a)) |
| bug fix |  **slider:** not stopping drag when released outside of viewport ([#18905](https://github.com/angular/components/issues/18905)) ([ca3c68f](https://github.com/angular/components/commit/ca3c68f)), closes [#18888](https://github.com/angular/components/issues/18888) |
| bug fix |  **tabs:** tab nav bar not disabling pagination animation ([#18886](https://github.com/angular/components/issues/18886)) ([a6e5423](https://github.com/angular/components/commit/a6e5423)) |
| performance |  **drag-drop:** avoid unnecessary change detection on pointer down events ([#18821](https://github.com/angular/components/issues/18821)) ([2f6e941](https://github.com/angular/components/commit/2f6e941)), closes [#18726](https://github.com/angular/components/issues/18726) |
| performance |  **focus-monitor:** optimize event registration ([#18667](https://github.com/angular/components/issues/18667)) ([174e4cd](https://github.com/angular/components/commit/174e4cd)) |
| performance |  **ripple:** optimize event registration ([#18633](https://github.com/angular/components/issues/18633)) ([fca0c28](https://github.com/angular/components/commit/fca0c28)) |

### google-maps

|            |                       |
| ---------- | --------------------- |
| bug fix |  map circle error during server-side rendering ([#18822](https://github.com/angular/components/issues/18822)) ([7c6be0e](https://github.com/angular/components/commit/7c6be0e)) |
| bug fix |  not rendering until mapTypeId is set ([#18967](https://github.com/angular/components/issues/18967)) ([977c605](https://github.com/angular/components/commit/977c605)), closes [#18965](https://github.com/angular/components/issues/18965) |

### cdk-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **dialog:** disableClose not working for tem… ([#18968](https://github.com/angular/components/issues/18968)) ([c0d19cb](https://github.com/angular/components/commit/c0d19cb)), closes [#18964](https://github.com/angular/components/issues/18964) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **mdc-card:** not handling dark themes ([#18938](https://github.com/angular/components/issues/18938)) ([f1c0c09](https://github.com/angular/components/commit/f1c0c09)) |
| bug fix |  **mdc-chips:** align theming setup with… ([#19000](https://github.com/angular/components/issues/19000)) ([7957423](https://github.com/angular/components/commit/7957423)) |
| bug fix |  **mdc-chips:** enter animation not disabled when using noop animations ([#18653](https://github.com/angular/components/issues/18653)) ([ea32d14](https://github.com/angular/components/commit/ea32d14)), closes [#18642](https://github.com/angular/components/issues/18642) |
| bug fix |  **mdc-chips:** support custom errorStat… ([#18974](https://github.com/angular/components/issues/18974)) ([58abf23](https://github.com/angular/components/commit/58abf23)) |
| bug fix |  **mdc-radio:** add strong focus indication ([#18946](https://github.com/angular/components/issues/18946)) ([897dee4](https://github.com/angular/components/commit/897dee4)) |
| bug fix |  **mdc-radio:** no focus indication in h… ([#18969](https://github.com/angular/components/issues/18969)) ([4d22936](https://github.com/angular/components/commit/4d22936)), closes [#13280](https://github.com/angular/components/issues/13280) |
| performance |  **mdc-chips:** avoid checking the DOM on each change detection ([#18929](https://github.com/angular/components/issues/18929)) ([29dda54](https://github.com/angular/components/commit/29dda54)) |


# 9.2.0 "metal-man" (2020-03-25)

This release introduces support for TypeScript 3.8.

### cdk

|            |                       |
| ---------- | --------------------- |
| bug fix |  **coercion:** add the support for readonly array coercion ([#18807](https://github.com/angular/components/issues/18807)) ([cd96886](https://github.com/angular/components/commit/cd96886)), closes [#18806](https://github.com/angular/components/issues/18806) |

### material

|            |                       |
| ---------- | --------------------- |
| bug fix |  **form-field:** incorrectly calculating start gap in RTL in the presence of a prefix ([#18867](https://github.com/angular/components/issues/18867)) ([6275339](https://github.com/angular/components/commit/6275339)), closes [#18857](https://github.com/angular/components/issues/18857) |
| bug fix |  **form-field:** some input types taller than plain text input ([#18825](https://github.com/angular/components/issues/18825)) ([e311791](https://github.com/angular/components/commit/e311791)), closes [#18787](https://github.com/angular/components/issues/18787) |
| bug fix |  **list:** no selected indication in high contrast mode while in single selection ([#18585](https://github.com/angular/components/issues/18585)) ([76e8a38](https://github.com/angular/components/commit/76e8a38)) |
| bug fix |  **table:** error when nesting tables ([#18832](https://github.com/angular/components/issues/18832)) ([32aec93](https://github.com/angular/components/commit/32aec93)), closes [#18768](https://github.com/angular/components/issues/18768) |

### google-maps

|            |                       |
| ---------- | --------------------- |
| feature |  support setting the map type ([#18578](https://github.com/angular/components/issues/18578)) ([2a6aae1](https://github.com/angular/components/commit/2a6aae1)), closes [#18577](https://github.com/angular/components/issues/18577) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **mdc-chips:** add feature targeting to theme styles ([#18830](https://github.com/angular/components/issues/18830)) ([54bbb90](https://github.com/angular/components/commit/54bbb90)) |
| bug fix |  **radio:** redefine theme variables ([#18907](https://github.com/angular/components/issues/18907)) ([cc9793f](https://github.com/angular/components/commit/cc9793f)) |
| bug fix |  **radio:** remove input click handler ([#18868](https://github.com/angular/components/issues/18868)) ([7c75d6e](https://github.com/angular/components/commit/7c75d6e)) |
| bug fix |  **slide-toggle:** allow different densities ([#18895](https://github.com/angular/components/issues/18895)) ([4d7ffaa](https://github.com/angular/components/commit/4d7ffaa)) |
| bug fix |  **slide-toggle:** redefine more variables ([#18908](https://github.com/angular/components/issues/18908)) ([1cca459](https://github.com/angular/components/commit/1cca459)) |


# 9.2.0-next.0 "twine-tornado" (2020-03-18)

### cdk

|            |                       |
| ---------- | --------------------- |
| bug fix |  **testing:** don't send unnecessary `Key.chord`s to protractor ([#18685](https://github.com/angular/components/issues/18685)) ([427e91f](https://github.com/angular/components/commit/427e91f)), closes [mozilla/geckodriver#1502](https://github.com/mozilla/geckodriver/issues/1502) |
| feature |  **testing:** Allow custom `querySelectorAll` method ([#18178](https://github.com/angular/components/issues/18178)) ([40ae1b1](https://github.com/angular/components/commit/40ae1b1)) |

### material

|            |                       |
| ---------- | --------------------- |
| bug fix |  **column-resize:** don't allow dragging using the right mouse button ([#18758](https://github.com/angular/components/issues/18758)) ([c538354](https://github.com/angular/components/commit/c538354)) |
| bug fix |  **datepicker:** prevent default dialog options from affecting touch ui calendar ([#18657](https://github.com/angular/components/issues/18657)) ([aca2533](https://github.com/angular/components/commit/aca2533)), closes [#18648](https://github.com/angular/components/issues/18648) |
| bug fix |  **radio:** clicks not landing correctly in some cases on Chrome ([#18357](https://github.com/angular/components/issues/18357)) ([fe29835](https://github.com/angular/components/commit/fe29835)), closes [#18285](https://github.com/angular/components/issues/18285) |
| feature |  **focus-monitor:** Add eventual detection mode option to focus monitor ([#18684](https://github.com/angular/components/issues/18684)) ([b3a2c56](https://github.com/angular/components/commit/b3a2c56)) |
| feature |  **form-field:** use injection token for providing form-field ([#18777](https://github.com/angular/components/issues/18777)) ([8ec44a1](https://github.com/angular/components/commit/8ec44a1)) |
| feature |  **snackbar:** add `isDismissed` harness method ([#18766](https://github.com/angular/components/issues/18766)) ([6e70cc7](https://github.com/angular/components/commit/6e70cc7)) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  rename sass mixins to mat-mdc-* ([#18615](https://github.com/angular/components/issues/18615)) ([b91e88f](https://github.com/angular/components/commit/b91e88f)) |
| bug fix |  **form-field:** avoid expression changed after check ([#18741](https://github.com/angular/components/issues/18741)) ([eae5cf8](https://github.com/angular/components/commit/eae5cf8)) |


## 9.1.3 "plastic-juice" (2020-03-16)

### cdk

|            |                       |
| ---------- | --------------------- |
| bug fix |  **overlay:** support SVG element as overlay origin ([#18595](https://github.com/angular/components/issues/18595)) ([1303d8f](https://github.com/angular/components/commit/1303d8f)) |

### material

|            |                       |
| ---------- | --------------------- |
| bug fix |  **clipboard:** not restoring focus to SVG elements ([#18626](https://github.com/angular/components/issues/18626)) ([f48ddf0](https://github.com/angular/components/commit/f48ddf0)) |
| bug fix |  **document-injection:** Update to use injected document ([#18780](https://github.com/angular/components/issues/18780)) ([350e598](https://github.com/angular/components/commit/350e598)) |
| bug fix |  **drag-drop:** detect changes on custom preview/placeholder before measuring ([#18698](https://github.com/angular/components/issues/18698)) ([2201a99](https://github.com/angular/components/commit/2201a99)), closes [#18622](https://github.com/angular/components/issues/18622) |
| bug fix |  **drag-drop:** error on IE when document is being auto scrolled ([#18757](https://github.com/angular/components/issues/18757)) ([b0b44d2](https://github.com/angular/components/commit/b0b44d2)) |
| bug fix |  **drag-drop:** only return item to initial index if the new container's sorting is disabled ([#18706](https://github.com/angular/components/issues/18706)) ([14ae95f](https://github.com/angular/components/commit/14ae95f)), closes [#18697](https://github.com/angular/components/issues/18697) |
| bug fix |  **form-field:** error when trying to lock label into position too early ([#18666](https://github.com/angular/components/issues/18666)) ([6fd3e6c](https://github.com/angular/components/commit/6fd3e6c)), closes [#18663](https://github.com/angular/components/issues/18663) |
| bug fix |  **list:** incorrectly selecting items when moving focus using shift + arrow key in single selection mode ([#18579](https://github.com/angular/components/issues/18579)) ([4a809d7](https://github.com/angular/components/commit/4a809d7)) |
| bug fix |  **list:** no disabled indication in high contrast mode ([#18567](https://github.com/angular/components/issues/18567)) ([5f37eb7](https://github.com/angular/components/commit/5f37eb7)) |
| bug fix |  **mdc-form-field:** refresh notch width when toggling appearances ([#18776](https://github.com/angular/components/issues/18776)) ([0bfa717](https://github.com/angular/components/commit/0bfa717)) |
| bug fix |  **mdc-form-field:** text-field should stretch based on host element ([#18778](https://github.com/angular/components/issues/18778)) ([2555344](https://github.com/angular/components/commit/2555344)) |
| bug fix |  **menu:** allow focus to be moved inside menuClosed event ([#18756](https://github.com/angular/components/issues/18756)) ([5499c40](https://github.com/angular/components/commit/5499c40)) |

### google-maps

|            |                       |
| ---------- | --------------------- |
| bug fix |  server-side rendering error for polygon and rectangle components ([#18573](https://github.com/angular/components/issues/18573)) ([d987807](https://github.com/angular/components/commit/d987807)) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **mdc-list:** fix styles for normal lists ([#18632](https://github.com/angular/components/issues/18632)) ([fcef522](https://github.com/angular/components/commit/fcef522)) |
| bug fix |  **slider:** add slider mixin to main theme mixin ([#18384](https://github.com/angular/components/issues/18384)) ([3b777eb](https://github.com/angular/components/commit/3b777eb)) |
| bug fix |  **mdc-form-field:** account for breaking changes in MDC ([#18795](https://github.com/angular/components/issues/18795)) ([e26670f](https://github.com/angular/components/commit/e26670f)) |


## 9.1.2 "milk-blade" (2020-03-10)

### cdk

|            |                       |
| ---------- | --------------------- |
| bug fix |  **testing:** don't send unnecessary `Key.chord`s to protractor ([#18685](https://github.com/angular/components/issues/18685)) ([f87195b](https://github.com/angular/components/commit/f87195b)), closes [mozilla/geckodriver#1502](https://github.com/mozilla/geckodriver/issues/1502) |

### material

|            |                       |
| ---------- | --------------------- |
| bug fix |  **column-resize:** don't allow dragging using the right mouse button ([#18758](https://github.com/angular/components/issues/18758)) ([b29308a](https://github.com/angular/components/commit/b29308a)) |
| bug fix |  **datepicker:** prevent default dialog options from affecting touch ui calendar ([#18657](https://github.com/angular/components/issues/18657)) ([913ca45](https://github.com/angular/components/commit/913ca45)), closes [#18648](https://github.com/angular/components/issues/18648) |
| bug fix |  **radio:** Move .mat-radio-input above .mat-focus-indicator. ([#18709](https://github.com/angular/components/issues/18709)) ([bdd9ec9](https://github.com/angular/components/commit/bdd9ec9)) |
| bug fix |  **typography:** default to normal letter spacing ([e441a8c](https://github.com/angular/components/commit/e441a8c)) |
| bug fix |  **tabs:** fix event emitter type ([#18664](https://github.com/angular/components/issues/18664)) ([b486891](https://github.com/angular/components/commit/b486891)) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **mdc-*:** rename sass mixins to mat-mdc-* ([#18615](https://github.com/angular/components/issues/18615)) ([694386a](https://github.com/angular/components/commit/694386a)) |
| bug fix |  **mdc-form-field:** avoid expression changed after check ([#18741](https://github.com/angular/components/issues/18741)) ([65a602f](https://github.com/angular/components/commit/65a602f)) |
| bug fix |  **mdc-progress-bar:** account for breaking changes in latest canary ([5d49f37](https://github.com/angular/components/commit/5d49f37)) |
| bug fix |  **mdc-slider:** resolve warnings about active event listeners ([#18583](https://github.com/angular/components/issues/18583)) ([6faa30c](https://github.com/angular/components/commit/6faa30c)) |


## 9.1.1 "tartan-tonsure" (2020-03-04)

### material

|            |                       |
| ---------- | --------------------- |
| bug fix |  **chips:** only add type attribute to button remove icons ([#18477](https://github.com/angular/components/issues/18477)) ([584cd49](https://github.com/angular/components/commit/584cd49)), closes [#18095](https://github.com/angular/components/issues/18095) [#18464](https://github.com/angular/components/issues/18464) |
| bug fix |  **sidenav:** not restoring focus to SVG elements ([#18614](https://github.com/angular/components/issues/18614)) ([ed763f5](https://github.com/angular/components/commit/ed763f5)) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **mdc-button:** add base css class to all buttons ([#18422](https://github.com/angular/components/issues/18422)) ([144cb41](https://github.com/angular/components/commit/144cb41)) |
| bug fix |  **mdc-chips:** align with latest MDC markup ([#18472](https://github.com/angular/components/issues/18472)) ([7db3e3a](https://github.com/angular/components/commit/7db3e3a)) |
| bug fix |  **mdc-chips:** don't allow focus on checkmark icon ([#18588](https://github.com/angular/components/issues/18588)) ([8637f66](https://github.com/angular/components/commit/8637f66)) |
| bug fix |  **mdc-radio:** able to focus disabled radio button via click ([#18584](https://github.com/angular/components/issues/18584)) ([cdd3600](https://github.com/angular/components/commit/cdd3600)), closes [#15499](https://github.com/angular/components/issues/15499) |
| bug fix |  **mdc-radio:** use consistent ripple timings ([#18590](https://github.com/angular/components/issues/18590)) ([2658d9d](https://github.com/angular/components/commit/2658d9d)) |

# 9.1.0 "adamantium-mannequin" (2020-02-24)

### Highlights

- Column resizing for tables is now in experimental ([198911](https://github.com/angular/components/commit/198911))
- Selection list now supports a single selection mode. Enable it with the `multiple` input set to `false`.
- `FakeMatIconRegistry` has been added for unit testing.
- Added a new Sass mixin, `mat-strong-focus-indicators`, that can be used to add a stronger focus
 indicator to Angular Material components

### cdk

|            |                       |
| ---------- | --------------------- |
| bug fix |  **text-field:** fix autofill listener on Chrome 80 ([#18468](https://github.com/angular/components/issues/18468)) ([4b329f0](https://github.com/angular/components/commit/4b329f0)) |
| feature |  **testing:** add `isFocused` method to `TestElement` ([#18183](https://github.com/angular/components/issues/18183)) ([e704996](https://github.com/angular/components/commit/e704996)) |

### material

_Deprecations:_

* `MAT_LABEL_GLOBAL_OPTIONS` exported in
`@angular/material/core` is deprecated. Use `MAT_FORM_FIELD_DEFAULT_OPTIONS`
from `@angular/material/form-field`. Note that the property `float` is
now matching the input name `floatLabel`.
* `FloatLabelType` exported in `@angular/material/core` is
deprecated. Import the symbol from `@angular/material/from-field`.

|            |                       |
| ---------- | --------------------- |
| bug fix |  **a11y:** focus trap incorrectly moving focus internally if focus was already moved into it ([#18541](https://github.com/angular/components/issues/18541)) ([c704d17](https://github.com/angular/components/commit/c704d17)), closes [#18538](https://github.com/angular/components/issues/18538) |
| bug fix |  **chips:** unable to set custom tabindex on chip ([#17699](https://github.com/angular/components/issues/17699)) ([bbb92a7](https://github.com/angular/components/commit/bbb92a7)) |
| bug fix |  **clipboard:** leak if directive is destroyed while a copy is pending ([#18066](https://github.com/angular/components/issues/18066)) ([9227c7b](https://github.com/angular/components/commit/9227c7b)) |
| bug fix |  **datepicker:** don't call date filter function if date is out of bounds ([#18419](https://github.com/angular/components/issues/18419)) ([5e34de2](https://github.com/angular/components/commit/5e34de2)), closes [#18411](https://github.com/angular/components/issues/18411) |
| bug fix |  **datepicker:** memory leak in popup mode ([#18102](https://github.com/angular/components/issues/18102)) ([5fe233a](https://github.com/angular/components/commit/5fe233a)), closes [#17896](https://github.com/angular/components/issues/17896) |
| bug fix |  **drag-drop:** auto scrolling not working if list uses scroll snapping ([#18294](https://github.com/angular/components/issues/18294)) ([9459f5b](https://github.com/angular/components/commit/9459f5b)), closes [#18162](https://github.com/angular/components/issues/18162) |
| bug fix |  **drag-drop:** error when dragging items inside transplanted views with OnPush change detection ([#18356](https://github.com/angular/components/issues/18356)) ([f2f78a0](https://github.com/angular/components/commit/f2f78a0)), closes [#18341](https://github.com/angular/components/issues/18341) |
| bug fix |  **drag-drop:** not working correctly inside transplanted views ([#18499](https://github.com/angular/components/issues/18499)) ([d1a6ea7](https://github.com/angular/components/commit/d1a6ea7)), closes [#18482](https://github.com/angular/components/issues/18482) |
| bug fix |  **expansion-panel:** Fix clipped box-shadow between expansion panel headers. ([#18378](https://github.com/angular/components/issues/18378)) ([dddbca2](https://github.com/angular/components/commit/dddbca2)) |
| bug fix |  **form-field:** fix underline jank in fill variant ([#18407](https://github.com/angular/components/issues/18407)) ([52fea06](https://github.com/angular/components/commit/52fea06)) |
| bug fix |  **icon/testing:** Adds size specs to fake icon ([#18306](https://github.com/angular/components/issues/18306)) ([27ef842](https://github.com/angular/components/commit/27ef842)) |
| bug fix |  **input:** apply static class binding to host ([#18196](https://github.com/angular/components/issues/18196)) ([8f62ffe](https://github.com/angular/components/commit/8f62ffe)) |
| bug fix |  **list:** allow for list and list items to be disabled ([#17584](https://github.com/angular/components/issues/17584)) ([c6a9f15](https://github.com/angular/components/commit/c6a9f15)), closes [#17574](https://github.com/angular/components/issues/17574) |
| bug fix |  **list:** Selection List element should not be focusable. ([#18445](https://github.com/angular/components/issues/18445)) ([fd1593d](https://github.com/angular/components/commit/fd1593d)) |
| bug fix |  **ng-update:** avoid error if project has folder ending with style extension ([#18454](https://github.com/angular/components/issues/18454)) ([411d048](https://github.com/angular/components/commit/411d048)), closes [#18434](https://github.com/angular/components/issues/18434) |
| bug fix |  **ng-update:** do not throw if project does not have dependencies ([#18470](https://github.com/angular/components/issues/18470)) ([01e4fba](https://github.com/angular/components/commit/01e4fba)), closes [#18469](https://github.com/angular/components/issues/18469) |
| bug fix |  **overlay:** incorrectly calculating using minWidth and minHeight as a string ([#18540](https://github.com/angular/components/issues/18540)) ([0d7e2f0](https://github.com/angular/components/commit/0d7e2f0)), closes [#18486](https://github.com/angular/components/issues/18486) |
| bug fix |  **overlay:** restore previous host element before attaching ([#17855](https://github.com/angular/components/issues/17855)) ([ee96e05](https://github.com/angular/components/commit/ee96e05)) |
| bug fix |  **platform:** RTL scrolling behavior detection not using cached value in some cases ([#18389](https://github.com/angular/components/issues/18389)) ([633e4c2](https://github.com/angular/components/commit/633e4c2)) |
| bug fix |  **selection-list:** incorrectly handling A key in some cases ([#18513](https://github.com/angular/components/issues/18513)) ([ff0de11](https://github.com/angular/components/commit/ff0de11)) |
| bug fix |  consistently use const enum ([#18390](https://github.com/angular/components/issues/18390)) ([8ae7b18](https://github.com/angular/components/commit/8ae7b18)) |
| bug fix |  **popover-edit:** Call markForCheck against row hover content when showing ([#18258](https://github.com/angular/components/issues/18258)) ([5c9f0d6](https://github.com/angular/components/commit/5c9f0d6)) |
| bug fix |  **progress-bar:** changed after checked error on animation end event with noop animations ([#18441](https://github.com/angular/components/issues/18441)) ([004eeb8](https://github.com/angular/components/commit/004eeb8)) |
| bug fix |  **slide-toggle:** clicks not landing correctly in some cases on Chrome ([#18285](https://github.com/angular/components/issues/18285)) ([99b27e8](https://github.com/angular/components/commit/99b27e8)), closes [#18269](https://github.com/angular/components/issues/18269) |
| bug fix |  ng-add should always install matching CDK version ([#18076](https://github.com/angular/components/issues/18076)) ([fba22bc](https://github.com/angular/components/commit/fba22bc)), closes [#18020](https://github.com/angular/components/issues/18020) [#18020](https://github.com/angular/components/issues/18020) |
| bug fix |  **slider:** inject document token ([#18275](https://github.com/angular/components/issues/18275)) ([3bae800](https://github.com/angular/components/commit/3bae800)) |
| bug fix |  **tree:** not allowing horizontal overflow ([#18215](https://github.com/angular/components/issues/18215)) ([c5923d6](https://github.com/angular/components/commit/c5923d6)), closes [#18182](https://github.com/angular/components/issues/18182) |
| feature |  **autocomplete:** add event when option is activated ([#18387](https://github.com/angular/components/issues/18387)) ([4629e23](https://github.com/angular/components/commit/4629e23)), closes [#17587](https://github.com/angular/components/issues/17587) |
| feature |  **chip:** Add focus indicator ([#18019](https://github.com/angular/components/issues/18019)) ([78cfd3c](https://github.com/angular/components/commit/78cfd3c)) |
| feature |  **drag-drop:** add injection token for configuring the input defaults ([#17970](https://github.com/angular/components/issues/17970)) ([4667cd4](https://github.com/angular/components/commit/4667cd4)), closes [#17921](https://github.com/angular/components/issues/17921) |
| feature |  **drag-drop:** add option to match size of dragged element in custom preview ([#18362](https://github.com/angular/components/issues/18362)) ([74b3441](https://github.com/angular/components/commit/74b3441)), closes [#18177](https://github.com/angular/components/issues/18177) |
| feature |  **drag-drop:** support scrolling parent elements apart from list and viewport ([#18082](https://github.com/angular/components/issues/18082)) ([c319431](https://github.com/angular/components/commit/c319431)), closes [#18072](https://github.com/angular/components/issues/18072) [#13588](https://github.com/angular/components/issues/13588) |
| feature |  **icon:** New FakeMatIconRegistry for unit tests ([#18151](https://github.com/angular/components/issues/18151)) ([71955d2](https://github.com/angular/components/commit/71955d2)) |
| feature |  **list:** Add single select mode. ([#18126](https://github.com/angular/components/issues/18126)) ([3b242f0](https://github.com/angular/components/commit/3b242f0)) |
| feature |  **paginator:** add provider to configure default options ([#17595](https://github.com/angular/components/issues/17595)) ([c7c6262](https://github.com/angular/components/commit/c7c6262)), closes [#17123](https://github.com/angular/components/issues/17123) |
| feature |  **popover-edit:** Ability to disable edit on specific cells ([#18273](https://github.com/angular/components/issues/18273)) ([b163b64](https://github.com/angular/components/commit/b163b64)) |
| feature |  **popover-edit:** Adds support for using mat-selection-list for select-like interactions. ([#18194](https://github.com/angular/components/issues/18194)) ([5b8c581](https://github.com/angular/components/commit/5b8c581)) |
| feature |  **select:** add injection token for configuring default options ([#17543](https://github.com/angular/components/issues/17543)) ([dbdc1a8](https://github.com/angular/components/commit/dbdc1a8)), closes [#17406](https://github.com/angular/components/issues/17406) |
| performance |  **ripple:** avoid page layouts from ripple elements ([#17253](https://github.com/angular/components/issues/17253)) ([79330b7](https://github.com/angular/components/commit/79330b7)), closes [#17252](https://github.com/angular/components/issues/17252) [#17252](https://github.com/angular/components/issues/17252) |
| refactor |  deprecate MAT_LABEL_GLOBAL_OPTIONS in favor of form-field global defaults ([#18017](https://github.com/angular/components/issues/18017)) ([bfdf323](https://github.com/angular/components/commit/bfdf323)) |

### google-maps

|            |                       |
| ---------- | --------------------- |
| bug fix |  avoid errors when accessing API too early ([#18376](https://github.com/angular/components/issues/18376)) ([591ac9c](https://github.com/angular/components/commit/591ac9c)) |
| bug fix |  internal events run inside NgZone ([#18034](https://github.com/angular/components/issues/18034)) ([3e2e023](https://github.com/angular/components/commit/3e2e023)) |
| bug fix |  support numbers for width/height of the map ([#18105](https://github.com/angular/components/issues/18105)) ([02c24ec](https://github.com/angular/components/commit/02c24ec)) |

### cdk-experimental

|            |                       |
| ---------- | --------------------- |
| feature |  **table:** experimental column resize ([#16114](https://github.com/angular/components/issues/16114)) ([198911f](https://github.com/angular/components/commit/198911f)) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  consolidate mixins in e2e theme file ([#18385](https://github.com/angular/components/issues/18385)) ([3af0d8a](https://github.com/angular/components/commit/3af0d8a)) |
| bug fix |  icon/fab missing states color ([#18403](https://github.com/angular/components/issues/18403)) ([9cfc66d](https://github.com/angular/components/commit/9cfc66d)) |
| bug fix |  rename theme files to match stable components ([#18383](https://github.com/angular/components/issues/18383)) ([3d35180](https://github.com/angular/components/commit/3d35180)) |
| bug fix |  **mdc-button:** some button variants not visible in high contrast mode ([#18036](https://github.com/angular/components/issues/18036)) ([a8fde4a](https://github.com/angular/components/commit/a8fde4a)) |
| bug fix |  **mdc-chips:** chip removal not working if animations are disabled ([#18314](https://github.com/angular/components/issues/18314)) ([bb08fa7](https://github.com/angular/components/commit/bb08fa7)), closes [#18303](https://github.com/angular/components/issues/18303) |
| bug fix |  **mdc-chips:** leading icon not hidden on init when preselected ([#17997](https://github.com/angular/components/issues/17997)) ([4c08a88](https://github.com/angular/components/commit/4c08a88)), closes [#17979](https://github.com/angular/components/issues/17979) |
| bug fix |  **mdc-chips:** support home/end in chip grid ([#18052](https://github.com/angular/components/issues/18052)) ([847a469](https://github.com/angular/components/commit/847a469)) |
| bug fix |  **mdc-form-field:** do not include outline structure styles in theme ([7fe8381](https://github.com/angular/components/commit/7fe8381)) |
| bug fix |  **mdc-form-field:** ensure validity styling is not reset by foundation ([#18266](https://github.com/angular/components/issues/18266)) ([f43e3e8](https://github.com/angular/components/commit/f43e3e8)) |
| bug fix |  **mdc-form-field:** fix baseline and handle custom controls better ([#18161](https://github.com/angular/components/issues/18161)) ([0c26354](https://github.com/angular/components/commit/0c26354)) |
| bug fix |  **mdc-form-field:** fix incorrect floating label shift in RTL ([440ca6c](https://github.com/angular/components/commit/440ca6c)) |
| bug fix |  **mdc-form-field:** fix server side rendering failures ([#18191](https://github.com/angular/components/issues/18191)) ([1ef30cb](https://github.com/angular/components/commit/1ef30cb)) |
| bug fix |  **mdc-form-field:** missing animation styles due to rebase conflict ([99e83a6](https://github.com/angular/components/commit/99e83a6)) |
| bug fix |  **mdc-form-field:** notched-outline should include prefixes and suffixes ([#18381](https://github.com/angular/components/issues/18381)) ([fc91061](https://github.com/angular/components/commit/fc91061)), closes [material-components-web#5326](https://github.com/material-components-web/issues/5326) |
| bug fix |  **mdc-form-field:** prevent label from jumping in outline notch ([60d6bd6](https://github.com/angular/components/commit/60d6bd6)) |
| bug fix |  **mdc-form-field:** properly render notched-outline on the server ([b5f8248](https://github.com/angular/components/commit/b5f8248)) |
| bug fix |  **mdc-form-field:** refresh view if prefix or suffix changes ([f36f1f3](https://github.com/angular/components/commit/f36f1f3)) |
| bug fix |  **mdc-form-field:** scrollbar always visible on textarea in IE ([#18438](https://github.com/angular/components/issues/18438)) ([2497e50](https://github.com/angular/components/commit/2497e50)) |
| bug fix |  **mdc-form-field:** setup typography styles for form-fields ([#18480](https://github.com/angular/components/issues/18480)) ([aea79f0](https://github.com/angular/components/commit/aea79f0)) |
| bug fix |  **mdc-form-filed:** missing focus and hover effect for fill ([5852fcb](https://github.com/angular/components/commit/5852fcb)), closes [/github.com/material-components/material-components-web/commit/c541ebe157a66e8d2e881fad16cc4dbe30b2c16b#diff-fa38508bb43a471ee25b746d85527fb5](https://github.com//github.com/material-components/material-components-web/commit/c541ebe157a66e8d2e881fad16cc4dbe30b2c16b/issues/diff-fa38508bb43a471ee25b746d85527fb5) |
| bug fix |  **mdc-input:** input should not inherit parent classnames ([#18180](https://github.com/angular/components/issues/18180)) ([500d235](https://github.com/angular/components/commit/500d235)) |
| bug fix |  **mdc-progress-bar:** changed after checked error on animation end event with noop animations ([#18508](https://github.com/angular/components/issues/18508)) ([289eecd](https://github.com/angular/components/commit/289eecd)), closes [#18441](https://github.com/angular/components/issues/18441) |
| bug fix |  **mdc-tabs:** not disabling all animations with noop animations module ([#18446](https://github.com/angular/components/issues/18446)) ([9c13772](https://github.com/angular/components/commit/9c13772)) |
| feature |  Add focus indicators to all MDC except mdc-chips. ([#18175](https://github.com/angular/components/issues/18175)) ([02db4ba](https://github.com/angular/components/commit/02db4ba)) |
| feature |  **chip:** add focus indicators ([#18261](https://github.com/angular/components/issues/18261)) ([7581191](https://github.com/angular/components/commit/7581191)) |
| feature |  **mdc-form-field:** add support for accent and warn theming ([#18399](https://github.com/angular/components/issues/18399)) ([b24b9e3](https://github.com/angular/components/commit/b24b9e3)) |
| feature |  **mdc-form-field:** add test harness ([#18165](https://github.com/angular/components/issues/18165)) ([944837f](https://github.com/angular/components/commit/944837f)) |
| feature |  **mdc-form-field:** support for disabling animations ([#18397](https://github.com/angular/components/issues/18397)) ([ed77ec9](https://github.com/angular/components/commit/ed77ec9)) |
| feature |  **mdc-form-field:** support theming through feature targeting ([#18265](https://github.com/angular/components/issues/18265)) ([27111eb](https://github.com/angular/components/commit/27111eb)) |
| feature |  **mdc-input:** add test harness ([#18224](https://github.com/angular/components/issues/18224)) ([c07ec04](https://github.com/angular/components/commit/c07ec04)) |
| feature |  **mdc-radio:** add functionality and styling ([#18272](https://github.com/angular/components/issues/18272)) ([59fce28](https://github.com/angular/components/commit/59fce28)) |


## 9.0.1 "copper-canoe" (2020-02-19)

### material

|            |                       |
| ---------- | --------------------- |
| bug fix |  **drag-drop:** error when dragging items inside transplanted views with OnPush change detection ([#18356](https://github.com/angular/components/issues/18356)) ([bd68a4f](https://github.com/angular/components/commit/bd68a4f)), closes [#18341](https://github.com/angular/components/issues/18341) |
| bug fix |  **list:** selection list element should not be focusable ([#18445](https://github.com/angular/components/issues/18445)) ([b61582c](https://github.com/angular/components/commit/b61582c)) |
| bug fix |  **ng-update:** avoid error if project has folder ending with style extension ([#18454](https://github.com/angular/components/issues/18454)) ([1cb7099](https://github.com/angular/components/commit/1cb7099)), closes [#18434](https://github.com/angular/components/issues/18434) |
| bug fix |  **ng-update:** better detection for workspace project in v9 hammer migration ([#18525](https://github.com/angular/components/issues/18525)) ([7a2d372](https://github.com/angular/components/commit/7a2d372)), closes [#18504](https://github.com/angular/components/issues/18504) |
| bug fix |  **slider:** inject document token in constructor ([#18275](https://github.com/angular/components/issues/18275)) ([d8b726d](https://github.com/angular/components/commit/d8b726d)) |


# 9.0.0 "tungsten-hombre" (2020-02-06)

# Highlights

#### New `@angular/cdk/testing` infrastructure and Angular Material test harnesses

Testing components has historically relied on using implementation details such as CSS selectors to
find components and to trigger events. This meant that whenever a component library changed its
implementation, all of the tests relying on those components would need to be updated.

In version 9, we are introducing component harnesses, which offer an alternative way to test
components. By abstracting away the implementation details, you can make sure your unit tests are
correctly scoped and less brittle.

Most of Angular Material's components can now be tested via harnesses, and we are making harnesses
available to any component author as part of the Component Dev Kit (CDK).

Here's an example test before harnesses:
```typescript
 it('should switch to bug report template', async () => {
    expect(fixture.debugElement.query('bug-report-form')).toBeNull();
    const selectTrigger = fixture.debugElement.query(By.css('.mat-select-trigger'));
    selectTrigger.triggerEventHandler('click', {});
    fixture.detectChanges();
    await fixture.whenStable();
    const options = document.querySelectorAll('.mat-select-panel mat-option');
    options[1].click(); // Click the second option, "Bug".
    fixture.detectChanges();
    await fixture.whenStable();
    expect(fixture.debugElement.query('bug-report-form')).not.toBeNull();
  });
```

And the same test with harnesses:

```typescript
 it('should switch to bug report template', async () => {
    expect(fixture.debugElement.query('bug-report-form')).toBeNull();
    const select = await loader.getHarness(MatSelect);
    await select.clickOptions({text: 'Bug'});
    expect(fixture.debugElement.query('bug-report-form')).not.toBeNull();
  });

```

Learn more about
[Angular Material's component harnesses](https://material.angular.io/guide/using-component-harnesses)
or [building your own with the CDK](https://v9.material.angular.io/cdk/testing/overview).

#### New `@angular/google-maps` package!

Earlier this year, we changed the name of this repo to "angular/components" to emphasize our goal
to provide more than Material Design components. The 9.0.0 release includes one of the next new
features in that regard- a new package that wraps the
[Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial)
in an easy-to-use Angular component.

You can see the
[documentation on GitHub](https://github.com/angular/components/blob/master/src/google-maps/README.md)
for the time being.

Big thanks to @mbehrlich for contributing this!

#### New `cdk/clipboard` subpackage containing helpers for working with the clipboard.

This new capability for `@angular/cdk` provides some convenient helpers for dealign with
the clipboard. [See the documentation for more information](https://material.angular.io/cdk/clipboard).

Big thanks to @xkxx for contributing this!

### Breaking changes

We no longer have a direct depedency on `tslib`. Instead it is now listed a `peerDependency`.
This matches Angular framework.

Users not using the Angular CLI will need to manually install `tslib` via;
```
yarn add tslib
# or
npm install tslib --save
```

### material

_Deprecations:_

* **checkbox:** MAT_CHECKBOX_CLICK_ACTION is deprecated, use MAT_CHECKBOX_DEFAULT_OPTIONS

|            |                       |
| ---------- | --------------------- |
| bug fix |  **autocomplete:** not picking up indirect descendant option g… ([#17510](https://github.com/angular/components/issues/17510)) ([f0df308](https://github.com/angular/components/commit/f0df308)) |
| bug fix |  **drag-drop:** coerce drop list autoScrollDisabled input ([#17480](https://github.com/angular/components/issues/17480)) ([e2de5e6](https://github.com/angular/components/commit/e2de5e6)), closes [#17475](https://github.com/angular/components/issues/17475) |
| bug fix |  **grid-list:** not picking up indirect descendant lines ([#17530](https://github.com/angular/components/issues/17530)) ([044a360](https://github.com/angular/components/commit/044a360)) |
| bug fix |  **list:** Do not rely on input binding order ([#17501](https://github.com/angular/components/issues/17501)) ([4301fb0](https://github.com/angular/components/commit/4301fb0)), closes [#17500](https://github.com/angular/components/issues/17500) |
| bug fix |  **list:** selection list option not picking up indirect desce… ([#17514](https://github.com/angular/components/issues/17514)) ([ee863b2](https://github.com/angular/components/commit/ee863b2)) |
| bug fix |  **stepper:** not picking up indirect descendant elements ([#17529](https://github.com/angular/components/issues/17529)) ([5f0f2dc](https://github.com/angular/components/commit/5f0f2dc)) |
| bug fix |  **tree:** not picking up indirect descendant node definitions ([#17522](https://github.com/angular/components/issues/17522)) ([7f1c2ca](https://github.com/angular/components/commit/7f1c2ca)) |
| feature |  **checkbox:** add options defaults config ([#17473](https://github.com/angular/components/issues/17473)) ([3fdab10](https://github.com/angular/components/commit/3fdab10)) |
| bug fix |  **button-toggle:** indirect descendant buttons not picked up… ([#17451](https://github.com/angular/components/issues/17451)) ([67b009f](https://github.com/angular/components/commit/67b009f)) |
| bug fix |  **chips:** don't set aria-required when element doesn't have… ([#17425](https://github.com/angular/components/issues/17425)) ([939c18d](https://github.com/angular/components/commit/939c18d)), closes [#17397](https://github.com/angular/components/issues/17397) |
| bug fix |  **dialog:** don't move focus if it was moved during close ani… ([#17300](https://github.com/angular/components/issues/17300)) ([3476f51](https://github.com/angular/components/commit/3476f51)), closes [#17296](https://github.com/angular/components/issues/17296) |
| bug fix |  **drag-drop:** global resize subscription not cleared ([#17257](https://github.com/angular/components/issues/17257)) ([f10b222](https://github.com/angular/components/commit/f10b222)), closes [#17255](https://github.com/angular/components/issues/17255) |
| bug fix |  **drag-drop:** not picking up indirect descendant items ([#17226](https://github.com/angular/components/issues/17226)) ([ef92091](https://github.com/angular/components/commit/ef92091)), closes [#17047](https://github.com/angular/components/issues/17047) |
| bug fix |  **drag-drop:** only call enterPredicate when pointer is inside drop list ([#17310](https://github.com/angular/components/issues/17310)) ([9fe32c0](https://github.com/angular/components/commit/9fe32c0)), closes [#17266](https://github.com/angular/components/issues/17266) |
| bug fix |  **drag-drop:** unable to drop into connected list inside shad… ([#17424](https://github.com/angular/components/issues/17424)) ([593a06c](https://github.com/angular/components/commit/593a06c)), closes [#16899](https://github.com/angular/components/issues/16899) [#17422](https://github.com/angular/components/issues/17422) |
| bug fix |  **form-field:** annotate base class with Directive for Ivy ([#17457](https://github.com/angular/components/issues/17457)) ([4663d8f](https://github.com/angular/components/commit/4663d8f)), closes [#17022](https://github.com/angular/components/issues/17022) |
| bug fix |  **form-field:** ensure that descendants are picked up in Ivy ([#17439](https://github.com/angular/components/issues/17439)) ([1d40ec9](https://github.com/angular/components/commit/1d40ec9)) |
| bug fix |  **form-field:** outline gap no calculated in shadow dom ([#17303](https://github.com/angular/components/issues/17303)) ([1b94295](https://github.com/angular/components/commit/1b94295)), closes [#17262](https://github.com/angular/components/issues/17262) |
| bug fix |  **menu:** trigger should aria-controls panel ([#17365](https://github.com/angular/components/issues/17365)) ([405f5d0](https://github.com/angular/components/commit/405f5d0)) |
| bug fix |  **schematics:** secondary entry point migration not working against v9 ([#17452](https://github.com/angular/components/issues/17452)) ([5e10833](https://github.com/angular/components/commit/5e10833)), closes [#17433](https://github.com/angular/components/issues/17433) |
| bug fix |  **select:** not picking up indirect descendant option groups ([#17458](https://github.com/angular/components/issues/17458)) ([d773cce](https://github.com/angular/components/commit/d773cce)) |
| bug fix |  **sidenav:** container not picking up indirect descendant sid… ([#17453](https://github.com/angular/components/issues/17453)) ([9933479](https://github.com/angular/components/commit/9933479)) |
| bug fix |  **snack-bar:** handle large numbers passed in as duration ([#17239](https://github.com/angular/components/issues/17239)) ([86a8fee](https://github.com/angular/components/commit/86a8fee)), closes [#17234](https://github.com/angular/components/issues/17234) |
| bug fix |  **tabs:** no longer use OnPush ([#16529](https://github.com/angular/components/issues/16529)) ([35b3226](https://github.com/angular/components/commit/35b3226)), closes [#15440](https://github.com/angular/components/issues/15440) |
| bug fix |  **tabs:** not picking up indirect descendant tabs in ivy ([#17346](https://github.com/angular/components/issues/17346)) ([ed0067e](https://github.com/angular/components/commit/ed0067e)), closes [#17336](https://github.com/angular/components/issues/17336) |
| bug fix |  **toolbar:** not picking up indirect descendant rows ([#17469](https://github.com/angular/components/issues/17469)) ([646d47f](https://github.com/angular/components/commit/646d47f)) |
| feature |  **autocomplete/testing:** polish harness API ([#17350](https://github.com/angular/components/issues/17350)) ([7a748fc](https://github.com/angular/components/commit/7a748fc)) |
| feature |  **drag-drop:** allow drag start delay to be configured based… ([#17301](https://github.com/angular/components/issues/17301)) ([43c7a7d](https://github.com/angular/components/commit/43c7a7d)), closes [#17260](https://github.com/angular/components/issues/17260) |
| feature |  **drag-drop:** allow for custom class to be set on preview ([#17304](https://github.com/angular/components/issues/17304)) ([34e848f](https://github.com/angular/components/commit/34e848f)), closes [#17089](https://github.com/angular/components/issues/17089) |
| feature |  **menu/testing:** finish implementing harness ([#17379](https://github.com/angular/components/issues/17379)) ([aa2cbf7](https://github.com/angular/components/commit/aa2cbf7)) |
| feature |  **ng-update:** add migration for hammerjs in version 9 ([#17369](https://github.com/angular/components/issues/17369)) ([f065977](https://github.com/angular/components/commit/f065977)) |
| feature |  **radio/testing:** polish harness API ([#17414](https://github.com/angular/components/issues/17414)) ([36d34a6](https://github.com/angular/components/commit/36d34a6)) |
| feature |  **sidenav/testing:** polish harness API ([#17415](https://github.com/angular/components/issues/17415)) ([9e79940](https://github.com/angular/components/commit/9e79940)) |
| feature |  **slide-toggle/testing:** polish harness API ([#17416](https://github.com/angular/components/issues/17416)) ([db999ff](https://github.com/angular/components/commit/db999ff)) |
| feature |  **tabs:** add input to opt out of pagination ([#17409](https://github.com/angular/components/issues/17409)) ([bb9a3a8](https://github.com/angular/components/commit/bb9a3a8)), closes [#17317](https://github.com/angular/components/issues/17317) |
| feature |  **tabs/testing:** polish harness API ([#17417](https://github.com/angular/components/issues/17417)) ([05600a2](https://github.com/angular/components/commit/05600a2)) |
| feature |  change tslib from direct dependency to peerDependency ([#17393](https://github.com/angular/components/issues/17393)) ([41166b7](https://github.com/angular/components/commit/41166b7)) |
| feature |  expand input types with coercion to work with ngtsc input type checking ([#17528](https://github.com/angular/components/issues/17528)) ([8da64f4](https://github.com/angular/components/commit/8da64f4)) |
| performance |  **tooltip:** avoid triggering change detection for all keydown events ([#17331](https://github.com/angular/components/issues/17331)) ([493c32d](https://github.com/angular/components/commit/493c32d)) |
| bug fix |  **chips:** handle ripple color in theme using CSS variables ([#17649](https://github.com/angular/components/issues/17649)) ([1923f7f](https://github.com/angular/components/commit/1923f7f)) |
| bug fix |  **clipboard:** namespace copied output name ([#17598](https://github.com/angular/components/issues/17598)) ([1a2befa](https://github.com/angular/components/commit/1a2befa)) |
| bug fix |  **overlay:** maxWidth and maxHeight not applied when using exact dimensions ([#17586](https://github.com/angular/components/issues/17586)) ([969d5c2](https://github.com/angular/components/commit/969d5c2)), closes [#17582](https://github.com/angular/components/issues/17582) |
| bug fix |  **popover-edit:** incorrect spacing for form field inside popover ([#17600](https://github.com/angular/components/issues/17600)) ([790b53e](https://github.com/angular/components/commit/790b53e)) |
| bug fix |  **select:** select active item when tabbing away ([#17592](https://github.com/angular/components/issues/17592)) ([93fdb00](https://github.com/angular/components/commit/93fdb00)), closes [#17442](https://github.com/angular/components/issues/17442) |
| bug fix |  **sidenav:** not destroying custom QueryList ([#17619](https://github.com/angular/components/issues/17619)) ([39c0074](https://github.com/angular/components/commit/39c0074)) |
| bug fix |  **slider:** handle touchcancel event ([#17520](https://github.com/angular/components/issues/17520)) ([320f387](https://github.com/angular/components/commit/320f387)) |
| bug fix |  **slider:** some potentially broken styles when using css variables ([#17580](https://github.com/angular/components/issues/17580)) ([584ad3f](https://github.com/angular/components/commit/584ad3f)) |
| bug fix |  **slider:** track fill not rendering on ios safari when slider starts at 0 ([#17583](https://github.com/angular/components/issues/17583)) ([fa18ce1](https://github.com/angular/components/commit/fa18ce1)) |
| bug fix |  **stepper:** not rendering correctly in some cases when step is inside ngIf ([#17555](https://github.com/angular/components/issues/17555)) ([cd7d8c8](https://github.com/angular/components/commit/cd7d8c8)) |
| bug fix |  **tabs:** custom QueryList not being cleaned up ([#17548](https://github.com/angular/components/issues/17548)) ([b7b7bd0](https://github.com/angular/components/commit/b7b7bd0)) |
| bug fix |  **tree:** fix typo in CSS class name ([#17538](https://github.com/angular/components/issues/17538)) ([52918ea](https://github.com/angular/components/commit/52918ea)) |
| feature |  **clipboard:** add the ability to specify number of attempts in clipboard directive ([#17547](https://github.com/angular/components/issues/17547)) ([a67cef6](https://github.com/angular/components/commit/a67cef6)) |
| feature |  **portal:** add new portal that projects DOM nodes ([#16101](https://github.com/angular/components/issues/16101)) ([d3d8859](https://github.com/angular/components/commit/d3d8859)), closes [#14430](https://github.com/angular/components/issues/14430) |
| feature |  **schematics:** add prompt to add global typography class ([#17602](https://github.com/angular/components/issues/17602)) ([c08050d](https://github.com/angular/components/commit/c08050d)) |
| bug fix |  **checkbox:** unknown property warning with Ivy during server-side rendering ([#17485](https://github.com/angular/components/issues/17485)) ([227c490](https://github.com/angular/components/commit/227c490)) |
| bug fix |  **ng-update:** migrations not running for release candidate versions ([#17704](https://github.com/angular/components/issues/17704)) ([bfa88fd](https://github.com/angular/components/commit/bfa88fd)) |
| bug fix |  **ng-update:** do not copy gesture config if only standard HammerJS events are used ([#17753](https://github.com/angular/components/issues/17753)) ([b53e092](https://github.com/angular/components/commit/b53e092)) |
| bug fix |  **ng-update:** hammer v9 migration should not unnecessarily set up gestures ([#17713](https://github.com/angular/components/issues/17713)) ([4794c60](https://github.com/angular/components/commit/4794c60)) |
| bug fix |  **ng-update:** imports to `MatProgressSpinnerModule` not migrated ([#17717](https://github.com/angular/components/issues/17717)) ([3acd6c1](https://github.com/angular/components/commit/3acd6c1)), closes [#17715](https://github.com/angular/components/issues/17715) |
| bug fix |  **bottom-sheet:** don't move focus if it was moved during close animation ([#17725](https://github.com/angular/components/issues/17725)) ([b622d11](https://github.com/angular/components/commit/b622d11)), closes [#17300](https://github.com/angular/components/issues/17300) |
| bug fix |  **card:** add missing card content selectors ([#17488](https://github.com/angular/components/issues/17488)) ([9b19e6a](https://github.com/angular/components/commit/9b19e6a)), closes [#17487](https://github.com/angular/components/issues/17487) |
| bug fix |  **dialog:** use view container from config when attaching content ([#17819](https://github.com/angular/components/issues/17819)) ([656c681](https://github.com/angular/components/commit/656c681)), closes [#17731](https://github.com/angular/components/issues/17731) |
| bug fix |  **drag-drop:** disabled state not synced on data binding changes ([#17330](https://github.com/angular/components/issues/17330)) ([ec77513](https://github.com/angular/components/commit/ec77513)), closes [#17325](https://github.com/angular/components/issues/17325) |
| bug fix |  **drag-drop:** position reset if viewport is resized while boundary is invisible ([#17777](https://github.com/angular/components/issues/17777)) ([f800900](https://github.com/angular/components/commit/f800900)), closes [#17750](https://github.com/angular/components/issues/17750) |
| bug fix |  **expansion:** accordion picking up headers from descendant accordion during keyboard navigation ([#17481](https://github.com/angular/components/issues/17481)) ([6c4122c](https://github.com/angular/components/commit/6c4122c)) |
| bug fix |  **form-field:** incorrect assumptions about page direction ([#17395](https://github.com/angular/components/issues/17395)) ([a6f235d](https://github.com/angular/components/commit/a6f235d)), closes [#15415](https://github.com/angular/components/issues/15415) [#17390](https://github.com/angular/components/issues/17390) [#15415](https://github.com/angular/components/issues/15415) [#17390](https://github.com/angular/components/issues/17390) |
| bug fix |  **input:** avoid multiple autosize input listeners with ivy ([#17817](https://github.com/angular/components/issues/17817)) ([fe151e6](https://github.com/angular/components/commit/fe151e6)) |
| bug fix |  **list:** don't handle selection keys while using typeahead in selection list ([#17826](https://github.com/angular/components/issues/17826)) ([ad42a1b](https://github.com/angular/components/commit/ad42a1b)), closes [#17785](https://github.com/angular/components/issues/17785) |
| bug fix |  **menu:** cap maximum elevation for nested menus ([#17687](https://github.com/angular/components/issues/17687)) ([987c85d](https://github.com/angular/components/commit/987c85d)) |
| bug fix |  **menu:** internal focus state out of sync if item is focused programmatically ([#17762](https://github.com/angular/components/issues/17762)) ([af6c13f](https://github.com/angular/components/commit/af6c13f)), closes [#17761](https://github.com/angular/components/issues/17761) |
| bug fix |  **menu:** keyboard controls not working if all items are disabled inside lazy content ([#17407](https://github.com/angular/components/issues/17407)) ([017728a](https://github.com/angular/components/commit/017728a)), closes [#16572](https://github.com/angular/components/issues/16572) [#17400](https://github.com/angular/components/issues/17400) |
| bug fix |  **portal:** better handling when dom portal content can't be restored ([#17851](https://github.com/angular/components/issues/17851)) ([2e6045c](https://github.com/angular/components/commit/2e6045c)) |
| bug fix |  **portal:** content not rendered inside outlet when view container is provided ([#17731](https://github.com/angular/components/issues/17731)) ([6d08240](https://github.com/angular/components/commit/6d08240)), closes [#17650](https://github.com/angular/components/issues/17650) |
| bug fix |  **select:** don't handle open key presses while the user is typing ([#17785](https://github.com/angular/components/issues/17785)) ([2f17450](https://github.com/angular/components/commit/2f17450)), closes [#17774](https://github.com/angular/components/issues/17774) |
| bug fix |  **slider:** stop dragging if page loses focus ([#17849](https://github.com/angular/components/issues/17849)) ([3b3c2ca](https://github.com/angular/components/commit/3b3c2ca)) |
| bug fix |  **tooltip:** theming can affect the tooltip color ([#17643](https://github.com/angular/components/issues/17643)) ([924494d](https://github.com/angular/components/commit/924494d)) |
| feature |  **badge:** add test harness ([#17661](https://github.com/angular/components/issues/17661)) ([f96e820](https://github.com/angular/components/commit/f96e820)) |
| feature |  **bottom-sheet:** add test harness ([#17618](https://github.com/angular/components/issues/17618)) ([a7c3ab0](https://github.com/angular/components/commit/a7c3ab0)) |
| feature |  **expansion:** add test harness ([#17691](https://github.com/angular/components/issues/17691)) ([acfa174](https://github.com/angular/components/commit/acfa174)) |
| feature |  **list:** add test harnesses for list components ([#17859](https://github.com/angular/components/issues/17859)) ([49b6dbd](https://github.com/angular/components/commit/49b6dbd)) |
| feature |  **sort:** add test harness ([#17802](https://github.com/angular/components/issues/17802)) ([81294f7](https://github.com/angular/components/commit/81294f7)) |
| bug fix |  **menu:** forward aria attribute to menu panel ([#17957](https://github.com/angular/components/issues/17957)) ([3299d8c](https://github.com/angular/components/commit/3299d8c)), closes [#17952](https://github.com/angular/components/issues/17952) |
| bug fix |  **chips:** fix ripple element opacity when using CSS variable theming ([#17576](https://github.com/angular/components/issues/17576)) ([e7508ad](https://github.com/angular/components/commit/e7508ad)) |
| bug fix |  **form-field:** deprecate `legacy` and `standard` appearances ([#17961](https://github.com/angular/components/issues/17961)) ([527f1b5](https://github.com/angular/components/commit/527f1b5)) |
| bug fix |  **chips:** clear user agent styles when set on button ([#17871](https://github.com/angular/components/issues/17871)) ([26e73ac](https://github.com/angular/components/commit/26e73ac)) |
| bug fix |  **sort:** no focus indication for active header ([#17735](https://github.com/angular/components/issues/17735)) ([191357a](https://github.com/angular/components/commit/191357a)), closes [#17716](https://github.com/angular/components/issues/17716) |
| bug fix |  **text-field:** correctly check _initialHeight ([#17900](https://github.com/angular/components/issues/17900)) ([a3e953e](https://github.com/angular/components/commit/a3e953e)) |
| feature |  **button-toggle:** add test harness ([#17996](https://github.com/angular/components/issues/17996)) ([9a6be0d](https://github.com/angular/components/commit/9a6be0d)) |
| feature |  **core:** add test harnesses for mat-option and mat-optgroup ([#17940](https://github.com/angular/components/issues/17940)) ([0ec499d](https://github.com/angular/components/commit/0ec499d)) |
| feature |  **paginator:** add test harness ([#17969](https://github.com/angular/components/issues/17969)) ([5a6cdaf](https://github.com/angular/components/commit/5a6cdaf)) |
| feature |  **select,input,form-field:** move test harnesses out of experimental ([#17874](https://github.com/angular/components/issues/17874)) ([1c1af58](https://github.com/angular/components/commit/1c1af58)) |
| bug fix |  **chips:** avoid accidental form submits when pressing remove button ([#18095](https://github.com/angular/components/issues/18095)) ([3b4e496](https://github.com/angular/components/commit/3b4e496)) |
| bug fix |  **datepicker:** not respecting form control updateOn: blur for invalid values ([#18063](https://github.com/angular/components/issues/18063)) ([61029c8](https://github.com/angular/components/commit/61029c8)), closes [#16461](https://github.com/angular/components/issues/16461) |
| bug fix |  **datepicker:** re-render calendar when locale changes ([#18094](https://github.com/angular/components/issues/18094)) ([be17c25](https://github.com/angular/components/commit/be17c25)), closes [#18087](https://github.com/angular/components/issues/18087) |
| bug fix |  **form-field:** delete top border from focus animation ([#17885](https://github.com/angular/components/issues/17885)) ([09dc459](https://github.com/angular/components/commit/09dc459)), closes [#17884](https://github.com/angular/components/issues/17884) |
| bug fix |  **form-field:** error when focusing outline form field angular elements on IE/Edge ([#18062](https://github.com/angular/components/issues/18062)) ([f573072](https://github.com/angular/components/commit/f573072)), closes [#16095](https://github.com/angular/components/issues/16095) |
| bug fix |  **mdc-chips:** Set aria-required on input instead of grid ([#18049](https://github.com/angular/components/issues/18049)) ([22d7f77](https://github.com/angular/components/commit/22d7f77)) |
| bug fix |  **scrolling:** update virtual scroll viewport size on resize ([#18058](https://github.com/angular/components/issues/18058)) ([c36466c](https://github.com/angular/components/commit/c36466c)), closes [#16802](https://github.com/angular/components/issues/16802) |
| bug fix |  **sidenav:** move focus into sidenav in side mode if autoFocus enabled explicitly ([#17995](https://github.com/angular/components/issues/17995)) ([c9856ee](https://github.com/angular/components/commit/c9856ee)), closes [#17967](https://github.com/angular/components/issues/17967) |
| bug fix |  **slide-toggle:** fix and simplify high contrast styles ([#18104](https://github.com/angular/components/issues/18104)) ([2fd862d](https://github.com/angular/components/commit/2fd862d)) |
| feature |  **grid-list:** add test harness ([#18001](https://github.com/angular/components/issues/18001)) ([5e9ca28](https://github.com/angular/components/commit/5e9ca28)) |
| feature |  **table:** add test harness ([#17799](https://github.com/angular/components/issues/17799)) ([a30094b](https://github.com/angular/components/commit/a30094b)) |
| bug fix |  **form-field:** undeprecated legacy and standard appearances ([#18144](https://github.com/angular/components/issues/18144)) ([9ea5694](https://github.com/angular/components/commit/9ea5694)) |
| bug fix |  reduce amount of generated high contrast styles ([#18332](https://github.com/angular/components/issues/18332)) ([b119472](https://github.com/angular/components/commit/b119472)) |
| bug fix |  **checkbox:** outline not visible when checked in high contrast mode ([#18048](https://github.com/angular/components/issues/18048)) ([75a7681](https://github.com/angular/components/commit/75a7681)) |
| bug fix |  **chips:** set aria-required on chip input ([#18098](https://github.com/angular/components/issues/18098)) ([05d072a](https://github.com/angular/components/commit/05d072a)), closes [#18049](https://github.com/angular/components/issues/18049) |
| bug fix |  **datepicker:** able to focus disabled datepicker toggle while disabled via click ([#18231](https://github.com/angular/components/issues/18231)) ([9086a4b](https://github.com/angular/components/commit/9086a4b)) |
| bug fix |  **drag-drop:** error if next sibling is removed after drag sequence has started ([#18230](https://github.com/angular/components/issues/18230)) ([7a167a2](https://github.com/angular/components/commit/7a167a2)), closes [#18205](https://github.com/angular/components/issues/18205) |
| bug fix |  **drag-drop:** not picking up initial disabled state of handle ([#16643](https://github.com/angular/components/issues/16643)) ([3b28d33](https://github.com/angular/components/commit/3b28d33)), closes [#16642](https://github.com/angular/components/issues/16642) |
| bug fix |  **drag-drop:** prevent dragging selected text with the mouse ([#18103](https://github.com/angular/components/issues/18103)) ([fbbac37](https://github.com/angular/components/commit/fbbac37)) |
| bug fix |  **expansion:** unable to toggle disabled panel via methods ([#18181](https://github.com/angular/components/issues/18181)) ([796db4d](https://github.com/angular/components/commit/796db4d)), closes [#18171](https://github.com/angular/components/issues/18171) |
| bug fix |  **input:** input harness not matching `matNativeControl` ([#18221](https://github.com/angular/components/issues/18221)) ([f0d3a6b](https://github.com/angular/components/commit/f0d3a6b)) |
| bug fix |  **overlay:** don't reset global overlay alignment when width is 100% and there's a maxWidth ([#17842](https://github.com/angular/components/issues/17842)) ([37d0191](https://github.com/angular/components/commit/37d0191)), closes [#17841](https://github.com/angular/components/issues/17841) |
| bug fix |  **overlay:** only clear duplicate containers from different platform ([#17006](https://github.com/angular/components/issues/17006)) ([67d27fd](https://github.com/angular/components/commit/67d27fd)), closes [#16851](https://github.com/angular/components/issues/16851) |
| bug fix |  **schematics:** global typography class always being added ([#18315](https://github.com/angular/components/issues/18315)) ([2b83a0a](https://github.com/angular/components/commit/2b83a0a)), closes [#17602](https://github.com/angular/components/issues/17602) [#16776](https://github.com/angular/components/issues/16776) |
| bug fix |  **tabs:** better high contrast indication on supported browsers ([#18160](https://github.com/angular/components/issues/18160)) ([01b31de](https://github.com/angular/components/commit/01b31de)) |
| bug fix |  **tabs:** don't start auto-scroll when right clicking on buttons ([#18033](https://github.com/angular/components/issues/18033)) ([ca9b204](https://github.com/angular/components/commit/ca9b204)) |
| bug fix |  **form-field:** fix underline jank in fill variant ([#18406](https://github.com/angular/components/issues/18406)) ([351d0c4](https://github.com/angular/components/commit/351d0c4)) |
| bug fix |  **ng-add:** do not overwrite version range specified in `ng add` ([#18365](https://github.com/angular/components/issues/18365)) ([06b7378](https://github.com/angular/components/commit/06b7378)) |
| bug fix |  **ng-add:** support "navigation" in additon to "nav" for navigation schematic ([#18364](https://github.com/angular/components/issues/18364)) ([06b7378](https://github.com/angular/components/commit/447ca71)) |
| bug fix |  **schematics:** do not depend on external dependency for colors ([#17788](https://github.com/angular/components/issues/17788)) ([e02bb82](https://github.com/angular/components/commit/e02bb82)) |

### cdk

|            |                       |
| ---------- | --------------------- |
| bug fix |  **scrolling:** expand type for "cdkVirtualForOf" input to allow null ([#17421](https://github.com/angular/components/issues/17421)) ([3e5e9db](https://github.com/angular/components/commit/3e5e9db)), closes [#17411](https://github.com/angular/components/issues/17411) |
| feature |  **testing:** add method to wait for async tasks outside the angular zone ([#17408](https://github.com/angular/components/issues/17408)) ([c50aa21](https://github.com/angular/components/commit/c50aa21)) |
| feature |  **clipboard:** new clipboard module ([#17272](https://github.com/angular/components/issues/17272)) ([473d4c6](https://github.com/angular/components/commit/473d4c6)) |
| feature |  change tslib from direct dependency to peerDependency ([#17393](https://github.com/angular/components/issues/17393)) ([41166b7](https://github.com/angular/components/commit/41166b7)) |
| feature |  **a11y:** add high-contrast mode detection ([#17378](https://github.com/angular/components/issues/17378)) ([6b7f091](https://github.com/angular/components/commit/6b7f091)) |
| feature |  **testing:** support querying for multiple TestHarness / ComponentHarness at once in locatorFor ([#17658](https://github.com/angular/components/issues/17658)) ([15a5171](https://github.com/angular/components/commit/15a5171)) |
| bug fix |  **overlay:** add missing transform origin directive input ([#17489](https://github.com/angular/components/issues/17489)) ([c69a727](https://github.com/angular/components/commit/c69a727)) |
| bug fix |  **virtual-scroll:** run changeDetection after computing transform ([#17727](https://github.com/angular/components/issues/17727)) ([d908c9f](https://github.com/angular/components/commit/d908c9f)) |
| feature |  **overlay:** accept PositionStrategy in cdkConnectedOverlay ([#16374](https://github.com/angular/components/issues/16374)) ([73d1ceb](https://github.com/angular/components/commit/73d1ceb)) |
| bug fix |  **a11y:** make cdk-high-contrast work w/ emulated view encapsulation ([#18152](https://github.com/angular/components/issues/18152)) ([aff21e8](https://github.com/angular/components/commit/aff21e8)) |

### youtube-player

|            |                       |
| ---------- | --------------------- |
| bug fix |  avoid clobbering api loaded callback ([#17850](https://github.com/angular/components/issues/17850)) ([7defaa6](https://github.com/angular/components/commit/7defaa6)) |
| bug fix |  clean up internal observables ([#17835](https://github.com/angular/components/issues/17835)) ([ab0f30d](https://github.com/angular/components/commit/ab0f30d)) |
| performance |  triggering change detection for unused events ([#17665](https://github.com/angular/components/issues/17665)) ([61b423a](https://github.com/angular/components/commit/61b423a)) |
| bug fix |  avoid setInterval change detection when player is created ([#17894](https://github.com/angular/components/issues/17894)) ([27fae29](https://github.com/angular/components/commit/27fae29)) |
| bug fix |  google-maps and youtube-player package missing tslib dependency ([#17939](https://github.com/angular/components/issues/17939)) ([2a2d837](https://github.com/angular/components/commit/2a2d837)) |
| bug fix |  memory leak if player is destroyed before it is done initializing ([#18046](https://github.com/angular/components/issues/18046)) ([6b3a271](https://github.com/angular/components/commit/6b3a271)) |
| bug fix |  not picking up static startSeconds and endSeconds ([#18214](https://github.com/angular/components/issues/18214)) ([8ea430f](https://github.com/angular/components/commit/8ea430f)), closes [#18212](https://github.com/angular/components/issues/18212) |
| bug fix |  handle API interactions before API has loaded ([#18368](https://github.com/angular/components/issues/18368)) ([98fac6c](https://github.com/angular/components/commit/98fac6c)), closes [#18279](https://github.com/angular/components/issues/18279) |


### google-maps

|            |                       |
| ---------- | --------------------- |
| bug fix |  avoid event listener leaks if inputs change ([#17664](https://github.com/angular/components/issues/17664)) ([b2ea4c8](https://github.com/angular/components/commit/b2ea4c8)) |
| bug fix |  error during server-side rendering ([#17744](https://github.com/angular/components/issues/17744)) ([0b0e98c](https://github.com/angular/components/commit/0b0e98c)) |
| bug fix |  handle trying to access the map before it has been initialized ([#17805](https://github.com/angular/components/issues/17805)) ([d990243](https://github.com/angular/components/commit/d990243)) |
| bug fix |  unable to subscribe to events after initialization ([#17845](https://github.com/angular/components/issues/17845)) ([22fecb3](https://github.com/angular/components/commit/22fecb3)) |
| feature |  Add MapPolyline component ([#17512](https://github.com/angular/components/issues/17512)) ([0c10828](https://github.com/angular/components/commit/0c10828)) |
| bug fix |  google-maps and youtube-player package missing tslib dependency ([#17939](https://github.com/angular/components/issues/17939)) ([2a2d837](https://github.com/angular/components/commit/2a2d837)) |
| bug fix |  incorrect event name ([#18027](https://github.com/angular/components/issues/18027)) ([f2cbc06](https://github.com/angular/components/commit/f2cbc06)), closes [#17845](https://github.com/angular/components/issues/17845) [#18026](https://github.com/angular/components/issues/18026) |
| bug fix |  sub-components throwing during server-side rendering ([#18059](https://github.com/angular/components/issues/18059)) ([a7f7e9b](https://github.com/angular/components/commit/a7f7e9b)) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **mdc-button:** elevate z-index of content ([#17349](https://github.com/angular/components/issues/17349)) ([230403e](https://github.com/angular/components/commit/230403e)) |
| bug fix |  **mdc-slide-toggle:** missing focus indication in high contrast mode ([#17471](https://github.com/angular/components/issues/17471)) ([3de0b08](https://github.com/angular/components/commit/3de0b08)) |
| bug fix |  **mdc-slider:** remove theme import from all-theme ([#17348](https://github.com/angular/components/issues/17348)) ([40665e9](https://github.com/angular/components/commit/40665e9)) |
| bug fix |  **mdc-tabs:** add `.mdc-tab__ripple` container ([#17498](https://github.com/angular/components/issues/17498)) ([409e656](https://github.com/angular/components/commit/409e656)) |
| bug fix |  **mdc-progress-bar:** server-side rendering error ([#17359](https://github.com/angular/components/issues/17359)) ([b30aedd](https://github.com/angular/components/commit/b30aedd)) |
| feature |  **mdc-tabs:** add option to fit ink bar to content ([#17507](https://github.com/angular/components/issues/17507)) ([77d51ca](https://github.com/angular/components/commit/77d51ca)) |
| bug fix |  **mdc-button:** rename state class ([#17575](https://github.com/angular/components/issues/17575)) ([9f9b017](https://github.com/angular/components/commit/9f9b017)) |
| bug fix |  **mdc-chips:** chip set not picking up indirect descendant chips ([#17568](https://github.com/angular/components/issues/17568)) ([e7aeee4](https://github.com/angular/components/commit/e7aeee4)) |
| feature |  **mdc-slider:** add test harness for mdc-slider ([#16978](https://github.com/angular/components/issues/16978)) ([7cd314c](https://github.com/angular/components/commit/7cd314c)) |
| feature |  **mdc-checkbox:** add default options ([#17578](https://github.com/angular/components/issues/17578)) ([4cc69d2](https://github.com/angular/components/commit/4cc69d2)) |
| feature |  **mdc-tabs:** add default fitInkBarToContent option ([#17556](https://github.com/angular/components/issues/17556)) ([2f84389](https://github.com/angular/components/commit/2f84389)) |
| feature |  **mdc-snackbar:** add skeleton ([#17161](https://github.com/angular/components/issues/17161)) ([6bda718](https://github.com/angular/components/commit/6bda718)) |
| bug fix |  **mdc-chips:** add checkmark container ([#17694](https://github.com/angular/components/issues/17694)) ([25c79cd](https://github.com/angular/components/commit/25c79cd)) |
| bug fix |  **mdc-chips:** use ripple target for state interactions ([#17681](https://github.com/angular/components/issues/17681)) ([7aa522a](https://github.com/angular/components/commit/7aa522a)) |
| bug fix |  **mdc-tabs:** markForCheck on ink bar content input setter ([#17561](https://github.com/angular/components/issues/17561)) ([71165f1](https://github.com/angular/components/commit/71165f1)) |
| bug fix |  **mdc-menu:** menu item should not inherit parent classname ([#17953](https://github.com/angular/components/issues/17953)) ([af7aa86](https://github.com/angular/components/commit/af7aa86)) |
| bug fix |  **mdc-progress-bar:** update to latest canary to include adapter changes ([#17938](https://github.com/angular/components/issues/17938)) ([0753f9e](https://github.com/angular/components/commit/0753f9e)) |
| feature |  **mdc-list:** Add scaffolding for MDC--based list ([#17906](https://github.com/angular/components/issues/17906)) ([45d34ad](https://github.com/angular/components/commit/45d34ad)) |
| feature |  **mdc-snackbar:** Add demo. ([#17895](https://github.com/angular/components/issues/17895)) ([3ca7c5a](https://github.com/angular/components/commit/3ca7c5a)) |
| feature |  **mdc-table:** add MDC styles/classes ([#18000](https://github.com/angular/components/issues/18000)) ([bb68c7b](https://github.com/angular/components/commit/bb68c7b)) |
| feature |  **mdc-table:** add skeleton ([#17992](https://github.com/angular/components/issues/17992)) ([4169c6f](https://github.com/angular/components/commit/4169c6f)) |
| feature |  **mdc-table:** add tests ([#18003](https://github.com/angular/components/issues/18003)) ([8796d7c](https://github.com/angular/components/commit/8796d7c)) |
| bug fix |  **mdc-switch:** updated to latest DOM structure guidance ([#17905](https://github.com/angular/components/issues/17905)) ([5da2ae1](https://github.com/angular/components/commit/5da2ae1)) |
| bug fix |  **mdc-chips:** avoid potential server-side rendering errors ([#18044](https://github.com/angular/components/issues/18044)) ([17a7bcb](https://github.com/angular/components/commit/17a7bcb)) |
| bug fix |  **mdc-chips:** checkmark not visible in high contrast black-on-white mode ([#18061](https://github.com/angular/components/issues/18061)) ([99af8e9](https://github.com/angular/components/commit/99af8e9)) |
| bug fix |  **mdc-chips:** error on IE and Edge due to unsupported classList ([#18074](https://github.com/angular/components/issues/18074)) ([5fccd24](https://github.com/angular/components/commit/5fccd24)) |
| bug fix |  **mdc-chips:** prevent default space and enter ([#18084](https://github.com/angular/components/issues/18084)) ([7b7e633](https://github.com/angular/components/commit/7b7e633)) |
| bug fix |  **mdc-chips:** remove aria-hidden from focusable element ([#18054](https://github.com/angular/components/issues/18054)) ([55ee988](https://github.com/angular/components/commit/55ee988)) |
| bug fix |  **mdc-chips:** removed chip still focusable ([#18083](https://github.com/angular/components/issues/18083)) ([403377d](https://github.com/angular/components/commit/403377d)) |
| bug fix |  **mdc-slide-toggle:** fix extra border in latest canary version ([#18035](https://github.com/angular/components/issues/18035)) ([b989701](https://github.com/angular/components/commit/b989701)) |
| bug fix |  **mdc-slide-toggle:** initial checked and disabled state not reflected visually ([#17991](https://github.com/angular/components/issues/17991)) ([e746895](https://github.com/angular/components/commit/e746895)) |
| bug fix |  **mdc-slide-toggle:** update adapter to match new interface ([#18124](https://github.com/angular/components/issues/18124)) ([636ae5c](https://github.com/angular/components/commit/636ae5c)) |
| bug fix |  **mdc-tabs:** incorrect tab text color in dark theme ([#18068](https://github.com/angular/components/issues/18068)) ([86a4ba7](https://github.com/angular/components/commit/86a4ba7)) |
| feature |  **mdc-form-field** initial prototype of mdc-form-field ([#17903](https://github.com/angular/components/issues/17903)) ([697c3a0](https://github.com/angular/components/commit/697c3a0)) |
| bug fix |  errors with latest MDC canary version ([#18173](https://github.com/angular/components/issues/18173)) ([5d13491](https://github.com/angular/components/commit/5d13491)) |
| bug fix |  mdc-theming and mdc-typography files not published ([#18251](https://github.com/angular/components/issues/18251)) ([77a25eb](https://github.com/angular/components/commit/77a25eb)) |

### cdk-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **dialog:** don't move focus if it was moved during close animation ([#17320](https://github.com/angular/components/issues/17320)) ([442ec30](https://github.com/angular/components/commit/442ec30)), closes [#17300](https://github.com/angular/components/issues/17300) |


## 8.2.3 "tinsel-pretzel" (2019-10-08)

### cdk

|            |                       |
| ---------- | --------------------- |
| bug fix |  **drag-drop:** dragging styles not reset once dragging is… ([#17150](https://github.com/angular/components/issues/17150)) ([4d489f0](https://github.com/angular/components/commit/4d489f0)), closes [#17139](https://github.com/angular/components/issues/17139) |

### material

|            |                       |
| ---------- | --------------------- |
| bug fix |  **a11y:** focus monitor not identifying touch focus inside shadow root ([#17167](https://github.com/angular/components/issues/17167)) ([bacb8df](https://github.com/angular/components/commit/bacb8df)) |
| bug fix |  **datepicker:** year not formatted in multi-year view button ([#17202](https://github.com/angular/components/issues/17202)) ([13363e6](https://github.com/angular/components/commit/13363e6)), closes [#17187](https://github.com/angular/components/issues/17187) |
| bug fix |  **overlay:** error when trying to add/remove empty string cla… ([#14919](https://github.com/angular/components/issues/14919)) ([9894ab2](https://github.com/angular/components/commit/9894ab2)) |
| bug fix |  **select:** highlighted option not updated if value is reset while closed ([#17213](https://github.com/angular/components/issues/17213)) ([d996abd](https://github.com/angular/components/commit/d996abd)), closes [#17212](https://github.com/angular/components/issues/17212) |
| bug fix |  **stepper:** unable to skip step if completed value is overwritten ([#15403](https://github.com/angular/components/issues/15403)) ([9f497a0](https://github.com/angular/components/commit/9f497a0)), closes [#15310](https://github.com/angular/components/issues/15310) |
| bug fix |  **tabs:** avoid Ivy template type checking errors in tab link ([#17282](https://github.com/angular/components/issues/17282)) ([cd11ae5](https://github.com/angular/components/commit/cd11ae5)), closes [#17228](https://github.com/angular/components/issues/17228) |
| bug fix |  **tabs:** avoid template type checking errors with Ivy ([#17228](https://github.com/angular/components/issues/17228)) ([1bfa1ea](https://github.com/angular/components/commit/1bfa1ea)), closes [#17121](https://github.com/angular/components/issues/17121) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **mdc-checkbox:** model value not updated through toggle method ([#17229](https://github.com/angular/components/issues/17229)) ([73b086d](https://github.com/angular/components/commit/73b086d)), closes [#11902](https://github.com/angular/components/issues/11902) |
| bug fix |  **mdc-button:** use state container for button interaction ([#17284](https://github.com/angular/components/issues/17284)) ([070d0a5](https://github.com/angular/components/commit/070d0a5)) |
| bug fix |  **mdc-button:** add ::after to reflect active styles ([#17283](https://github.com/angular/components/issues/17283)) ([4380179](https://github.com/angular/components/commit/4380179)) |
| bug fix |  **mdc-slider:** incorrectly rendering extra background ([#17207](https://github.com/angular/components/issues/17207)) ([561c90c](https://github.com/angular/components/commit/561c90c)) |


# 9.0.0-next.0 "cardboard-cpu" (2019-10-03)

### cdk

_Highlights_:
* New infrastructure for creating component test harnesses is available in `@angular/cdk/testing`.
  Documentation for this infrastructure and for specific Angular Material harnesses is in-progress.

|            |                       |
| ---------- | --------------------- |
| bug fix |  **drag-drop:** dragging styles not reset once dragging is dragging styles not reset once dragging is completed ([#17150](https://github.com/angular/components/issues/17150)) ([e62e6bd](https://github.com/angular/components/commit/e62e6bd)), closes [#17139](https://github.com/angular/components/issues/17139) |
| feature |  **testing:** move harness code from cdk-experimental ([#17026](https://github.com/angular/components/issues/17026)) ([bacdc85](https://github.com/angular/components/commit/bacdc85)) |

### material

_Breaking changes:_

* Components can no longer be imported through "@angular/material".
Use the individual secondary entry-points, such as `@angular/material/button`.

|            |                       |
| ---------- | --------------------- |
| bug fix |  **a11y:** focus monitor not identifying touch focus inside shadow root ([#17167](https://github.com/angular/components/issues/17167)) ([3673f3d](https://github.com/angular/components/commit/3673f3d)) |
| bug fix |  **datepicker:** year not formatted in multi-year view button ([#17202](https://github.com/angular/components/issues/17202)) ([ae28fce](https://github.com/angular/components/commit/ae28fce)), closes [#17187](https://github.com/angular/components/issues/17187) |
| bug fix |  **overlay:** error when trying to add/remove empty string class ([#14919](https://github.com/angular/components/issues/14919)) ([5509c23](https://github.com/angular/components/commit/5509c23)) |
| bug fix |  **schematics:** support stricter TypeScript compiler flags ([#17159](https://github.com/angular/components/issues/17159)) ([f32fb68](https://github.com/angular/components/commit/f32fb68)), closes [#17135](https://github.com/angular/components/issues/17135) |
| bug fix |  **select:** highlighted option not updated if value is reset while closed ([#17213](https://github.com/angular/components/issues/17213)) ([d453d06](https://github.com/angular/components/commit/d453d06)), closes [#17212](https://github.com/angular/components/issues/17212) |
| bug fix |  **stepper:** unable to skip step if completed value is overwritten ([#15403](https://github.com/angular/components/issues/15403)) ([bebb9ff](https://github.com/angular/components/commit/bebb9ff)), closes [#15310](https://github.com/angular/components/issues/15310) |
| bug fix |  **tabs:** avoid Ivy template type checking errors in tab link ([#17282](https://github.com/angular/components/issues/17282)) ([ef5d9cb](https://github.com/angular/components/commit/ef5d9cb)), closes [#17228](https://github.com/angular/components/issues/17228) |
| bug fix |  **tabs:** avoid template type checking errors with Ivy ([#17228](https://github.com/angular/components/issues/17228)) ([8c98013](https://github.com/angular/components/commit/8c98013)), closes [#17022](https://github.com/angular/components/issues/17022) [#17121](https://github.com/angular/components/issues/17121) |
| feature |  **autocomplete:** move harness out of experimental ([#17080](https://github.com/angular/components/issues/17080)) ([dec116b](https://github.com/angular/components/commit/dec116b)) |
| feature |  **button:** move harness out of experimental ([#17098](https://github.com/angular/components/issues/17098)) ([3dc33f1](https://github.com/angular/components/commit/3dc33f1)) |
| feature |  **checkbox:** move checkbox harness out of experimental ([#17067](https://github.com/angular/components/issues/17067)) ([09ded04](https://github.com/angular/components/commit/09ded04)) |
| feature |  **core:** allow more granular control over sanity checks ([#16973](https://github.com/angular/components/issues/16973)) ([77994e9](https://github.com/angular/components/commit/77994e9)), closes [#16617](https://github.com/angular/components/issues/16617) |
| feature |  **dialog:** move test harness out of experimental ([#17104](https://github.com/angular/components/issues/17104)) ([8859dfc](https://github.com/angular/components/commit/8859dfc)) |
| feature |  **google-maps:** Add map-info-window component ([#17027](https://github.com/angular/components/issues/17027)) ([30de283](https://github.com/angular/components/commit/30de283)) |
| feature |  **menu:** move test harness out of experimental ([#17113](https://github.com/angular/components/issues/17113)) ([170299b](https://github.com/angular/components/commit/170299b)) |
| feature |  **progress:** move harnesses out of experimental ([#17115](https://github.com/angular/components/issues/17115)) ([26df035](https://github.com/angular/components/commit/26df035)) |
| feature |  **radio:** move test harness out of experimental ([#17117](https://github.com/angular/components/issues/17117)) ([ef439b4](https://github.com/angular/components/commit/ef439b4)) |
| feature |  **sidenav:** move harnesses out of experimental ([#17122](https://github.com/angular/components/issues/17122)) ([aa2e0ab](https://github.com/angular/components/commit/aa2e0ab)) |
| feature |  **slide-toggle:** move harness out of experimental ([#17132](https://github.com/angular/components/issues/17132)) ([15ba871](https://github.com/angular/components/commit/15ba871)) |
| feature |  **slide-toggle:** remove Hammer.js dependency ([#17102](https://github.com/angular/components/issues/17102)) ([534b9c2](https://github.com/angular/components/commit/534b9c2)) |
| feature |  **slider:** move harness out of experimental ([#17136](https://github.com/angular/components/issues/17136)) ([8229353](https://github.com/angular/components/commit/8229353)) |
| feature |  **slider:** remove Hammer.js dependency ([#16860](https://github.com/angular/components/issues/16860)) ([00a3e79](https://github.com/angular/components/commit/00a3e79)) |
| feature |  **snack-bar:** add test harness for snack-bar ([#17127](https://github.com/angular/components/issues/17127)) ([6a732d3](https://github.com/angular/components/commit/6a732d3)) |
| feature |  **tabs:** move harnesses out of experimental ([#17137](https://github.com/angular/components/issues/17137)) ([a2ccacd](https://github.com/angular/components/commit/a2ccacd)) |
| feature |  **tooltip:** remove Hammer.js dependency ([#17003](https://github.com/angular/components/issues/17003)) ([4126029](https://github.com/angular/components/commit/4126029)), closes [#16850](https://github.com/angular/components/issues/16850) |
| refactor |  remove re-exports from primary entry-point ([0c1d369](https://github.com/angular/components/commit/0c1d369)) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **mdc-checkbox:** model value not updated through toggle method ([#17229](https://github.com/angular/components/issues/17229)) ([f178f20](https://github.com/angular/components/commit/f178f20)), closes [#11902](https://github.com/angular/components/issues/11902) |
| bug fix |  **mdc-button:** use state container for button interaction ([#17284](https://github.com/angular/components/issues/17284)) ([ae682d8](https://github.com/angular/components/commit/ae682d8)) |
| bug fix |  **mdc-button:** add ::after to reflect active styles ([#17283](https://github.com/angular/components/issues/17283)) ([4dbf9f6](https://github.com/angular/components/commit/4dbf9f6)) |
| bug fix |  **mdc-radio:** rename mdc-radio APIs to match existing radio APIs ([#17178](https://github.com/angular/components/issues/17178)) ([8e141ef](https://github.com/angular/components/commit/8e141ef)) |
| bug fix |  **mdc-slider:** incorrectly rendering extra background ([#17207](https://github.com/angular/components/issues/17207)) ([7bee53f](https://github.com/angular/components/commit/7bee53f)) |
| feature |  **mdc-radio:** Set up the MDC foundation ([#17180](https://github.com/angular/components/issues/17180)) ([67f3c0b](https://github.com/angular/components/commit/67f3c0b)) |
| feature |  **mdc-radio:** use MDC DOM structure and styles ([#17179](https://github.com/angular/components/issues/17179)) ([2112fac](https://github.com/angular/components/commit/2112fac)) |


## 8.2.2 "vantablack-rainbow" (2019-09-30)

### cdk

|            |                       |
| ---------- | --------------------- |
| bug fix |  **drag-drop:** unable to drop into connected sibling after scrolling into view via the parent ([#17162](https://github.com/angular/components/issues/17162)) ([357d1c3](https://github.com/angular/components/commit/357d1c3)), closes [#17144](https://github.com/angular/components/issues/17144) |

### material

|            |                       |
| ---------- | --------------------- |
| bug fix |  **autocomplete:** top option group not scrolled into view when going up ([#16343](https://github.com/angular/components/issues/16343)) ([c0034d3](https://github.com/angular/components/commit/c0034d3)) |
| bug fix |  **button:** focus method does not respect specified origin ([#17183](https://github.com/angular/components/issues/17183)) ([7355389](https://github.com/angular/components/commit/7355389)), closes [#17174](https://github.com/angular/components/issues/17174) |
| bug fix |  **datepicker:** add scope to calendar headers ([#17163](https://github.com/angular/components/issues/17163)) ([cf244ff](https://github.com/angular/components/commit/cf244ff)), closes [#17038](https://github.com/angular/components/issues/17038) |
| bug fix |  **form-field:** FormField with outline doesn't work well with dir="r… ([#15415](https://github.com/angular/components/issues/15415)) ([8158754](https://github.com/angular/components/commit/8158754)), closes [#14944](https://github.com/angular/components/issues/14944)
| bug fix |  **list:** selection list checkbox theme overwritten by parent theme ([#16939](https://github.com/angular/components/issues/16939)) ([57b2c3f](https://github.com/angular/components/commit/57b2c3f)), closes [#16891](https://github.com/angular/components/issues/16891) |

### cdk-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **clipboard:** avoid changing layout with temporary textarea ([#17227](https://github.com/angular/components/issues/17227)) ([d4d958e](https://github.com/angular/components/commit/d4d958e)) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **mdc-slider:** not usable in high contrast mode ([#17164](https://github.com/angular/components/issues/17164)) ([73a233d](https://github.com/angular/components/commit/73a233d)) |

## 8.2.1 "cashmere-ore" (2019-09-24)

### cdk

|            |                       |
| ---------- | --------------------- |
| bug fix |  **a11y:** remove aria-describedby attribute when no descriptions are left ([#17074](https://github.com/angular/components/issues/17074)) ([0e5c82c](https://github.com/angular/components/commit/0e5c82c)), closes [#17070](https://github.com/angular/components/issues/17070) |

### material

|            |                       |
| ---------- | --------------------- |
| bug fix |  **icon:** use ErrorHandler to log MatIcon errors ([#16999](https://github.com/angular/components/issues/16999)) ([8f54f5c](https://github.com/angular/components/commit/8f54f5c)), closes [#16967](https://github.com/angular/components/issues/16967) |
| bug fix |  **select:** fix recursive call to SelectionModel.select() ([#17071](https://github.com/angular/components/issues/17071)) ([ed96878](https://github.com/angular/components/commit/ed96878)) |
| bug fix |  **slide-toggle:** clear static aria attributes from host nodes ([#17085](https://github.com/angular/components/issues/17085)) ([8d73869](https://github.com/angular/components/commit/8d73869)), closes [#16938](https://github.com/angular/components/issues/16938) |

### youtube-player

|            |                       |
| ---------- | --------------------- |
| bug fix |  errors during server-side rendering ([#17091](https://github.com/angular/components/issues/17091)) ([9b547b9](https://github.com/angular/components/commit/9b547b9)) |

### cdk-experimental

|            |                       |
| ---------- | --------------------- |
| feature |  expose root loader instance in testbed harness environment ([#16903](https://github.com/angular/components/issues/16903)) ([69f7693](https://github.com/angular/components/commit/69f7693)), closes [#16697](https://github.com/angular/components/issues/16697) [#16709](https://github.com/angular/components/issues/16709) |

### material-experimental

|            |                       |
| ---------- | --------------------- |
| bug fix |  **button:** ripple color should match state color ([#17066](https://github.com/angular/components/issues/17066)) ([7e98a7e](https://github.com/angular/components/commit/7e98a7e)) |
| bug fix |  **button:** ripples were using mat-button styles ([#17069](https://github.com/angular/components/issues/17069)) ([6d48c4f](https://github.com/angular/components/commit/6d48c4f)) |
| bug fix |  **mdc-tabs:** error during server-side rendering ([#17169](https://github.com/angular/components/issues/17169)) ([57fa880](https://github.com/angular/components/commit/57fa880)) |
| feature |  **drawer:** add harness for mat-drawer ([#17010](https://github.com/angular/components/issues/17010)) ([7ad30eb](https://github.com/angular/components/commit/7ad30eb)), closes [#16695](https://github.com/angular/components/issues/16695) |
| feature |  **form-field:** add test harness ([#17138](https://github.com/angular/components/issues/17138)) ([eebf589](https://github.com/angular/components/commit/eebf589)) |
| bug fix |  **testing:** throw better error when trying to use fixture after it has been destroyed ([#17058](https://github.com/angular/components/issues/17058)) ([5e2296f](https://github.com/angular/components/commit/5e2296f)) |


# 8.2.0 "silicon-neuron" (2019-09-09)

### Highlights

#### New `@angular/youtube-player` package!
Earlier this year, we changed the name of this repo to "angular/components" to emphasize our goal
to provide more than only Material Design components. The 8.2.0 release includes one of the next new
features in that regard- a new package that wraps the
[YouTube Player API for iframe Embeds](https://developers.google.com/youtube/iframe_api_reference)
in an easy-to-use Angular component.

You can see the
[documentation on GitHub](https://github.com/angular/components/blob/master/src/youtube-player)
for the time being.

Big thanks to @YourDeveloperFriend for contributing this!

### Bug Fixes

* **autocomplete:** unable to open panel via click inside shadow DOM ([#15616](https://github.com/angular/components/issues/15616)) ([6e1fe2c](https://github.com/angular/components/commit/6e1fe2c)), closes [#15606](https://github.com/angular/components/issues/15606)
* **button:** fix typo in comment ([#17001](https://github.com/angular/components/issues/17001)) ([5fb0d57](https://github.com/angular/components/commit/5fb0d57))
* **card:** stroked buttons missing margin ([#16576](https://github.com/angular/components/issues/16576)) ([399ed29](https://github.com/angular/components/commit/399ed29)), closes [#16546](https://github.com/angular/components/issues/16546)
* **chips:** allow null to be set as chip value ([#16950](https://github.com/angular/components/issues/16950)) ([57998a2](https://github.com/angular/components/commit/57998a2)), closes [#16844](https://github.com/angular/components/issues/16844)
* **chips:** preselected chip not highlighted on init inside OnPush component ([#16868](https://github.com/angular/components/issues/16868)) ([aad7ff7](https://github.com/angular/components/commit/aad7ff7)), closes [#16841](https://github.com/angular/components/issues/16841)
* **drag-drop:** connected drop zones not working inside shadow root ([#16899](https://github.com/angular/components/issues/16899)) ([6009211](https://github.com/angular/components/commit/6009211)), closes [#16898](https://github.com/angular/components/issues/16898)
* **drag-drop:** drop list ref sorting disabled by default ([#16963](https://github.com/angular/components/issues/16963)) ([306e07c](https://github.com/angular/components/commit/306e07c)), closes [#16961](https://github.com/angular/components/issues/16961)
* **drag-drop:** error if custom preview or placeholder node is not an element ([#16409](https://github.com/angular/components/issues/16409)) ([8a4bed5](https://github.com/angular/components/commit/8a4bed5))
* **drag-drop:** handle list and viewport auto scroll regions overlapping ([#16675](https://github.com/angular/components/issues/16675)) ([792e886](https://github.com/angular/components/commit/792e886)), closes [#16647](https://github.com/angular/components/issues/16647)
* **drag-drop:** handle the element going out of the boundary after a viewport resize ([#16874](https://github.com/angular/components/issues/16874)) ([44b8a47](https://github.com/angular/components/commit/44b8a47)), closes [#16536](https://github.com/angular/components/issues/16536)
* **drag-drop:** incorrectly constraining element position if size changes between drag sequences ([#16876](https://github.com/angular/components/issues/16876)) ([cad0102](https://github.com/angular/components/commit/cad0102)), closes [#15749](https://github.com/angular/components/issues/15749)
* **drag-drop:** preview position relative to cursor thrown off if item has margin ([#16180](https://github.com/angular/components/issues/16180)) ([46cf45f](https://github.com/angular/components/commit/46cf45f)), closes [#16171](https://github.com/angular/components/issues/16171)
* **drag-drop:** unable to drop into connected sibling that was scrolled into view ([#16681](https://github.com/angular/components/issues/16681)) ([dd59044](https://github.com/angular/components/commit/dd59044))
* **expansion:** show header focus state when expanded ([#16486](https://github.com/angular/components/issues/16486)) ([7bf5e4e](https://github.com/angular/components/commit/7bf5e4e))
* **icon:** not copying attributes from symbol nodes ([#16896](https://github.com/angular/components/issues/16896)) ([425eb7e](https://github.com/angular/components/commit/425eb7e)), closes [#16892](https://github.com/angular/components/issues/16892)
* **icon:** use ErrorHandler to log MatIcon errors ([#16967](https://github.com/angular/components/issues/16967)) ([dccddd9](https://github.com/angular/components/commit/dccddd9))
* **icon:** use ErrorLogger to log http errors ([#16855](https://github.com/angular/components/issues/16855)) ([75686e8](https://github.com/angular/components/commit/75686e8))
* **menu:** keyboard controls not working if all items are disabled ([#16572](https://github.com/angular/components/issues/16572)) ([d3f63a3](https://github.com/angular/components/commit/d3f63a3)), closes [#16565](https://github.com/angular/components/issues/16565)
* **menu:** restore focus immediately when menu is closed ([#16960](https://github.com/angular/components/issues/16960)) ([bfa1853](https://github.com/angular/components/commit/bfa1853)), closes [#16954](https://github.com/angular/components/issues/16954)
* **paginator:** MatPaginatorIntl will now cause MatPaginator to display an 'EN DASH' (U+2013) rather than a 'HYPHEN-MINUS' (U+002D) by default
* **progress-spinner:** animation node inserted into wrong style root when using ngIf with ShadowDom encapsulation ([#16982](https://github.com/angular/components/issues/16982)) ([dadb3e1](https://github.com/angular/components/commit/dadb3e1))
* **radio:** clear aria attributes from host node ([#16938](https://github.com/angular/components/issues/16938)) ([237e030](https://github.com/angular/components/commit/237e030)), closes [#16913](https://github.com/angular/components/issues/16913)
* **slider:** displayWith function never called with "null" ([#16707](https://github.com/angular/components/issues/16707)) ([17c8983](https://github.com/angular/components/commit/17c8983))
* **snack-bar:** don't stretch to fullscreen in landscape orientation ([#16940](https://github.com/angular/components/issues/16940)) ([8d12902](https://github.com/angular/components/commit/8d12902)), closes [#16911](https://github.com/angular/components/issues/16911)
* **snack-bar:** too tall under some circumstances in Safari ([#16679](https://github.com/angular/components/issues/16679)) ([e9baa09](https://github.com/angular/components/commit/e9baa09)), closes [#16605](https://github.com/angular/components/issues/16605)
* **tabs:** tab nav bar not highlighting active tab if rendered after init ([#16624](https://github.com/angular/components/issues/16624)) ([93e9415](https://github.com/angular/components/commit/93e9415)), closes [#16607](https://github.com/angular/components/issues/16607)
* **tooltip:** avoid adding same aria description as trigger's aria-label ([#16870](https://github.com/angular/components/issues/16870)) ([1006cc2](https://github.com/angular/components/commit/1006cc2)), closes [#16719](https://github.com/angular/components/issues/16719)


### Features

* **dialog:** allow for custom ComponentFactoryResolver to be passed in ([#16437](https://github.com/angular/components/issues/16437)) ([565bd7d](https://github.com/angular/components/commit/565bd7d)), closes [#16431](https://github.com/angular/components/issues/16431)
* **dialog:** expose current dialog state ([#16691](https://github.com/angular/components/issues/16691)) ([3f0268f](https://github.com/angular/components/commit/3f0268f)), closes [#16636](https://github.com/angular/components/issues/16636)
* **dialog:** don't override type attribute if set on mat-dialog-close ([#16927](https://github.com/angular/components/issues/16927)) ([3ee3ecb](https://github.com/angular/components/commit/3ee3ecb)), closes [#16909](https://github.com/angular/components/issues/16909) [#16909](https://github.com/angular/components/issues/16909)
* **form-field:** allow hideRequiredMarker default value to be configured through the `MAT_FORM_FIELD_DEFAULT_OPTIONS` ([#16244](https://github.com/angular/components/issues/16244)) ([94c3fed](https://github.com/angular/components/commit/94c3fed)), closes [#16243](https://github.com/angular/components/issues/16243)
* **icon:** allow viewBox to be configured when registering icons ([#16320](https://github.com/angular/components/issues/16320)) ([3638886](https://github.com/angular/components/commit/3638886)), closes [#2981](https://github.com/angular/components/issues/2981) [#16293](https://github.com/angular/components/issues/16293)
* **moment-date-adapter:** implement strict mode ([#16462](https://github.com/angular/components/issues/16462)) ([dd42956](https://github.com/angular/components/commit/dd42956))
* **overlay:** allow width/height when using point as flexible origin ([#16739](https://github.com/angular/components/issues/16739)) ([b98a3bd](https://github.com/angular/components/commit/b98a3bd)), closes [#16160](https://github.com/angular/components/issues/16160)
* **select:** allow for typeahead debounce interval to be customized ([#16579](https://github.com/angular/components/issues/16579)) ([f23a56a](https://github.com/angular/components/commit/f23a56a)), closes [#16472](https://github.com/angular/components/issues/16472)
* **sort:** remove hammer dependency ([#16951](https://github.com/angular/components/issues/16951)) ([7594ca1](https://github.com/angular/components/commit/7594ca1))


## 8.1.4 "orichalcum-ocarina" (2019-08-26)


### Bug Fixes

* **button:** fix opacity is not added to ripple when using CSS variables to define custom theme ([c62330b](https://github.com/angular/components/commit/c62330b))
* **datepicker:** don't set aria-haspopup if no datepicker is set ([#15554](https://github.com/angular/components/issues/15554)) ([f590dc6](https://github.com/angular/components/commit/f590dc6))
* **dialog:** not applying margins to new button variants ([#11961](https://github.com/angular/components/issues/11961)) ([0ad0d7a](https://github.com/angular/components/commit/0ad0d7a))
* **expansion:** not adding margin for all button types ([#16806](https://github.com/angular/components/issues/16806)) ([1d545a6](https://github.com/angular/components/commit/1d545a6))
* **menu:** inconsistent behavior when clicking on a disabled item ([#16696](https://github.com/angular/components/issues/16696)) ([e441a75](https://github.com/angular/components/commit/e441a75)), closes [#16694](https://github.com/angular/components/issues/16694)
* **menu:** mark lazy menu content as dirty before attach ([#16506](https://github.com/angular/components/issues/16506)) ([1b54011](https://github.com/angular/components/commit/1b54011))
* **overlay:** _updateElementSize should not fail if pane is disposed. ([#16600](https://github.com/angular/components/issues/16600)) ([febcaff](https://github.com/angular/components/commit/febcaff))
* **radio:** show ripple on programmatic focus ([#16512](https://github.com/angular/components/issues/16512)) ([a243ef9](https://github.com/angular/components/commit/a243ef9))
* **radio-button:** underlying input not respecting value binding ([e1760b6](https://github.com/angular/components/commit/e1760b6))
* **schematics:** module imports not generated for schematics ([#16787](https://github.com/angular/components/issues/16787)) ([2cfcd36](https://github.com/angular/components/commit/2cfcd36))
* **schematics:** navigation schematic not respecting breakpoints on initial render ([#16788](https://github.com/angular/components/issues/16788)) ([621ddf7](https://github.com/angular/components/commit/621ddf7))
* **sidenav:** avoid CSS class name conflict ([#16798](https://github.com/angular/components/issues/16798)) ([636cb9f](https://github.com/angular/components/commit/636cb9f))
* **sidenav:** focus trap enabled state not updated if mode changes while open ([#16602](https://github.com/angular/components/issues/16602)) ([666e9b3](https://github.com/angular/components/commit/666e9b3)), closes [#16601](https://github.com/angular/components/issues/16601)
* **slider:** inconsistent cursor behavior if user's pointer moves around while dragging ([d62b19e](https://github.com/angular/components/commit/d62b19e)), closes [#14613](https://github.com/angular/components/issues/14613)



## 8.1.3 "gelatin-key" (2019-08-14)


### Bug Fixes

* **cdk/virtual-scroll:** fix subpixel rounding errors on hdpi… ([#16269](https://github.com/angular/components/issues/16269)) ([5bbf9ba](https://github.com/angular/components/commit/5bbf9ba))
* **cdk-experimental/popover-edit:** prevent default escape action ([#16747](https://github.com/angular/components/issues/16747)) ([073b98c](https://github.com/angular/components/commit/073b98c)), closes [#16202](https://github.com/angular/components/issues/16202)


### Features

* **cdk-experimental/clipboard:** add cdk-experimental clipboard service + directive ([#16704](https://github.com/angular/components/issues/16704)) ([6c51995](https://github.com/angular/components/commit/6c51995))



## 8.1.2 "bologna-bayou" (2019-07-29)


### Bug Fixes

* **bottom-sheet:** not moving focus to container if autoFocus is disabled and focus was moved while animating ([#16418](https://github.com/angular/components/issues/16418)) ([0720a41](https://github.com/angular/components/commit/0720a41)), closes [#16297](https://github.com/angular/components/issues/16297) [#16221](https://github.com/angular/components/issues/16221)
* **button-toggle:** error when check value is set via static attribute in Ivy ([#16587](https://github.com/angular/components/issues/16587)) ([3c92c08](https://github.com/angular/components/commit/3c92c08)), closes [#16471](https://github.com/angular/components/issues/16471)
* **overlay:** clear duplicate overlay container coming in from the server ([#11940](https://github.com/angular/components/issues/11940)) ([ba508a6](https://github.com/angular/components/commit/ba508a6)), closes [#11817](https://github.com/angular/components/issues/11817)
* **slide-toggle:** invalid required validator in template-driven forms ([#16547](https://github.com/angular/components/issues/16547)) ([dc0c271](https://github.com/angular/components/commit/dc0c271))
* **tabs:** only use aria-current on active links ([#16562](https://github.com/angular/components/issues/16562)) ([b0937dc](https://github.com/angular/components/commit/b0937dc)), closes [#16557](https://github.com/angular/components/issues/16557)
* **tree:** unable to set zero as the padding of a tree node ([#16345](https://github.com/angular/components/issues/16345)) ([bf66d81](https://github.com/angular/components/commit/bf66d81)), closes [#16338](https://github.com/angular/components/issues/16338)
* **typography:** use `calc` to allow css variables ([#16475](https://github.com/angular/components/issues/16475)) ([6013036](https://github.com/angular/components/commit/6013036))



## 8.1.1 "vantablack-glowstick" (2019-07-16)


### Bug Fixes

* **form-field:** superfluous whitespace when compiled with bazel ([#13911](https://github.com/angular/components/issues/13911)) ([fdad49d](https://github.com/angular/components/commit/fdad49d))
* **ng-update:** material update fails due to circular dependency ([#16538](https://github.com/angular/components/issues/16538)) ([5d731d3](https://github.com/angular/components/commit/5d731d3))



# 8.1.0 "denim-antipode" (2019-07-15)

### Highlights
* The `MatNavTabBar` now support tab pagination, a long-requested feature.
* `CdkDrag` now supports scrolling the viewport when an item is dragged near the edge.


### Bug Fixes

* **card:** disable all animations when using NoopAnimationsModule ([#11538](https://github.com/angular/components/issues/11538)) ([11a4ff0](https://github.com/angular/components/commit/11a4ff0)), closes [#10590](https://github.com/angular/components/issues/10590)
* **drag-drop:** fix drag start delay behavior to allow scrolling ([#16228](https://github.com/angular/components/issues/16228)) ([738f10c](https://github.com/angular/components/commit/738f10c)), closes [#16224](https://github.com/angular/components/issues/16224)
* **drag-drop:** return up-to-date position if getFreeDragPosition is called while dragging ([#16464](https://github.com/angular/components/issues/16464)) ([1540391](https://github.com/angular/components/commit/1540391))
* **expansion:** incorrect margin for "before" indicator when expanded ([#16420](https://github.com/angular/components/issues/16420)) ([98a231d](https://github.com/angular/components/commit/98a231d))
* **menu:** keyboard controls not respecting DOM order when items are added at a later point ([#11720](https://github.com/angular/components/issues/11720)) ([49e8c59](https://github.com/angular/components/commit/49e8c59)), closes [#11652](https://github.com/angular/components/issues/11652)
* **overlay:** incorrectly calculating position when page is scrolled horizontally and overlay is anchored to the right ([#16235](https://github.com/angular/components/issues/16235)) ([f61730a](https://github.com/angular/components/commit/f61730a)), closes [#16009](https://github.com/angular/components/issues/16009)
* **overlay:** OverlayKeyboardDispatcher (used in dialog and overlay
    and available in the CDK) now listens on bubbling/propagation phase
    instead of capture phase. This means that overlay keydown handlers
    are now called after any applicable handlers inside of an overlay,
    and it respects any stopPropagation() calls from inside the overlay.

### Features

* **a11y:** allow for element to be used as message in AriaDescriber ([#16118](https://github.com/angular/components/issues/16118)) ([8c4f25f](https://github.com/angular/components/commit/8c4f25f)), closes [#16099](https://github.com/angular/components/issues/16099)
* **common:** Add dev-mode sanity check for mismatched versions of cdk and material ([#15395](https://github.com/angular/components/issues/15395)) ([ffad004](https://github.com/angular/components/commit/ffad004))
* **drag-drop:** add support for automatic scrolling ([#16382](https://github.com/angular/components/issues/16382)) ([207dba6](https://github.com/angular/components/commit/207dba6)), closes [#13588](https://github.com/angular/components/issues/13588)
* **expansion:** allow expansion toggle indicator positioning ([#16257](https://github.com/angular/components/issues/16257)) ([c3eac17](https://github.com/angular/components/commit/c3eac17))
* **radio:** add provider for default color input ([#15811](https://github.com/angular/components/issues/15811)) ([5c51301](https://github.com/angular/components/commit/5c51301))
* **schematics:** add font-display query ([#16363](https://github.com/angular/components/issues/16363)) ([43a01e9](https://github.com/angular/components/commit/43a01e9))
* **style:** allow palettes to specify a separate hue for colored text ([#15149](https://github.com/angular/components/issues/15149)) ([15038e3](https://github.com/angular/components/commit/15038e3)), closes [#15148](https://github.com/angular/components/issues/15148)
* **tabs:** support pagination in nav bar ([#16055](https://github.com/angular/components/issues/16055)) ([aa22368](https://github.com/angular/components/commit/aa22368)), closes [#2177](https://github.com/angular/components/issues/2177)


## 8.0.2 "metal-mushroom" (2019-07-02)


### Bug Fixes

* **autocomplete:** alt + up arrow to close panel not working ([#15364](https://github.com/angular/components/issues/15364)) ([219ad33](https://github.com/angular/components/commit/219ad33))
* **bottom-sheet:** DOM nodes not cleaned up if view container is destroyed mid-animation ([#16349](https://github.com/angular/components/issues/16349)) ([f8d32fe](https://github.com/angular/components/commit/f8d32fe)), closes [#16309](https://github.com/angular/components/issues/16309)
* **breakpoint-observer:** fix the breakpoint observer emit count and accuracy ([#15964](https://github.com/angular/components/issues/15964)) ([43b2df6](https://github.com/angular/components/commit/43b2df6)), closes [#10925](https://github.com/angular/components/issues/10925)
* **checkbox:** hover indication showing when disabled ([#16159](https://github.com/angular/components/issues/16159)) ([bd52ce0](https://github.com/angular/components/commit/bd52ce0)), closes [#16157](https://github.com/angular/components/issues/16157)
* **chips:** disable all animations when using NoopAnimationsModule ([#11546](https://github.com/angular/components/issues/11546)) ([7fc7da1](https://github.com/angular/components/commit/7fc7da1)), closes [#10590](https://github.com/angular/components/issues/10590)
* **datepicker:** align multi-year-view based on minDate and maxDate ([#16018](https://github.com/angular/components/issues/16018)) ([400a95b](https://github.com/angular/components/commit/400a95b)), closes [#10646](https://github.com/angular/components/issues/10646)
* **dialog:** DOM nodes not cleaned up if view container is destroyed mid-animation ([#16309](https://github.com/angular/components/issues/16309)) ([a9a266a](https://github.com/angular/components/commit/a9a266a)), closes [#16284](https://github.com/angular/components/issues/16284)
* **dialog:** don't move focus to dialog container if focus is already inside the dialog ([#16297](https://github.com/angular/components/issues/16297)) ([62447be](https://github.com/angular/components/commit/62447be))
* **dialog:** not moving focus to container if autoFocus is disabled and focus was moved from a different component ([#16221](https://github.com/angular/components/issues/16221)) ([2669b90](https://github.com/angular/components/commit/2669b90)), closes [#16215](https://github.com/angular/components/issues/16215)
* **expansion-panel:** header animating on init when using non-default height ([#16122](https://github.com/angular/components/issues/16122)) ([f58840c](https://github.com/angular/components/commit/f58840c)), closes [#13088](https://github.com/angular/components/issues/13088) [#16067](https://github.com/angular/components/issues/16067)
* **list:** matching item not preselected if added after init ([#16080](https://github.com/angular/components/issues/16080)) ([90b1d5d](https://github.com/angular/components/commit/90b1d5d)), closes [#16062](https://github.com/angular/components/issues/16062)
* **ng-update:** do not rely on node-glob for finding rule directories ([#16381](https://github.com/angular/components/issues/16381)) ([6732be5](https://github.com/angular/components/commit/6732be5)), closes [#16208](https://github.com/angular/components/issues/16208)
* **overlay:** events not being unbound from destroyed backdrop ([#16268](https://github.com/angular/components/issues/16268)) ([c0efe17](https://github.com/angular/components/commit/c0efe17))
* **popover-edit:** remove fallthroughs in switch statement ([#16281](https://github.com/angular/components/issues/16281)) ([14246de](https://github.com/angular/components/commit/14246de))
* **tabs:** disable all animations when using NoopAnimationsModule ([#11395](https://github.com/angular/components/issues/11395)) ([91326e9](https://github.com/angular/components/commit/91326e9)), closes [#10590](https://github.com/angular/components/issues/10590)


### Performance Improvements

* **drag-drop:** use narrower check for touch events ([#16082](https://github.com/angular/components/issues/16082)) ([b7aa763](https://github.com/angular/components/commit/b7aa763))



## 8.0.1 "yarn-barn" (2019-06-10)


### Bug Fixes

* **drag-drop:** error if drag sequence is started while another one is finishing ([#16081](https://github.com/angular/components/issues/16081)) ([23df7aa](https://github.com/angular/components/commit/23df7aa))
* **drag-n-drop:** ignore consecutive touchmove events on drag item on multitouch ([#15923](https://github.com/angular/components/issues/15923)) ([208d43f](https://github.com/angular/components/commit/208d43f))
* prevent default on escape key presses ([#16202](https://github.com/angular/components/issues/16202)) ([0871d88](https://github.com/angular/components/commit/0871d88))
* **ng-update:** fix table generator schematic ([#16204](https://github.com/angular/components/issues/16204)) ([7386ea1](https://github.com/angular/components/commit/7386ea1))
* **ng-update:** do not report form-field breaking change from v6 ([#16161](https://github.com/angular/components/issues/16161)) ([7b78cb7](https://github.com/angular/components/commit/7b78cb7)), closes [#16143](https://github.com/angular/components/issues/16143)
* **ng-update:** parse cli workspace config as json5 ([#16218](https://github.com/angular/components/issues/16218)) ([0fe2711](https://github.com/angular/components/commit/0fe2711))
* **overlay:** stop using capture phase for overlay keyboard handling ([#16019](https://github.com/angular/components/issues/16019)) ([67b3e5f](https://github.com/angular/components/commit/67b3e5f)), closes [#9928](https://github.com/angular/components/issues/9928)
* **popover-edit:** unable to change type of popover buttons ([#16058](https://github.com/angular/components/issues/16058)) ([ba9fd14](https://github.com/angular/components/commit/ba9fd14))
* **progress-spinner:** non-default diameter indeterminate animation not working inside Shadow DOM ([#16177](https://github.com/angular/components/issues/16177)) ([e391869](https://github.com/angular/components/commit/e391869))
* **scrolling:** virtual scroll throw off if directive injects ViewContainerRef ([#16137](https://github.com/angular/components/issues/16137)) ([af56441](https://github.com/angular/components/commit/af56441)), closes [#16130](https://github.com/angular/components/issues/16130)
* **bottom-sheet:** allow for scroll strategy to be configured ([#15535](https://github.com/angular/components/issues/15535)) ([4d0d080](https://github.com/angular/components/commit/4d0d080)), closes [#15533](https://github.com/angular/components/issues/15533)


### Features
* **popover-edit (experimental):** accessible row hover content ([#15917](https://github.com/angular/components/issues/15917)) ([c979484](https://github.com/angular/components/commit/c979484))
* **popover-edit (experimental):** Helper class to reduce form state preservation boilerplate ([#15939](https://github.com/angular/components/issues/15939)) ([3bc6020](https://github.com/angular/components/commit/3bc6020))

# 8.0.0 "osmium-octothorpe" (2019-05-28)


### Bug Fixes

* **ng-update:** do not always use double quotes for generated imports ([#16131](https://github.com/angular/components/issues/16131)) ([a3856c7](https://github.com/angular/components/commit/a3856c7)), closes [/github.com/microsoft/TypeScript/blob/6a559e37ee0d660fcc94f086a34370e79e94b17a/src/compiler/emitter.ts#L3796-L3797](https://github.com//github.com/microsoft/TypeScript/blob/6a559e37ee0d660fcc94f086a34370e79e94b17a/src/compiler/emitter.ts/issues/L3796-L3797) [#14532](https://github.com/angular/components/issues/14532)


### Deprecations
Importing directly from the root `@angular/material` entry-point is deprecated. You should instead
import from specific entry-points, e.g. `@angular/material/button`. This aligns with `@angular/cdk`,
makes clear where symbols originate, and helps safeguard against including unused code. The
deprecated style will be removed in Angular v9.

Angular CLI users can use `ng update @angular/material` to automatically migrate imports to the new
style.

### Breaking Changes (including changes from RC)

* **tabs:** `_ngZone` and `_platform` parameters in `MatTabHeader` constructor are now required.
* **tabs:** `changeDetectorRef` parameter in `MatTabBody` constructor is now required.
* **expansion:** The `_document` and `_animationMode` parameters are now required.
* **list:** `_elementRef` parameter in `MatList` constructor is now required.
* **list:** `_changeDetectorRef` parameter in `MatListItem` constructor is now required. Also the order of constructor parameters has changed.
* **progress-spinner:** The `animationMode` mode parameter is now required in the `MatProgressSpinner` and `MatSpinner` constructors.
* **progress-spinner:** The `_elementRef` parameter has changed from `ElementRef<any>` to `ElementRef<HTMLElement>` in the `MatProgressSpinner` and `MatSpinner` constructors.
* **button:** `_platform` parameter has been removed from the `MatButton` constructor and the `_animationMode` is now required.
* **button:** `platform` parameter has been removed from the `MatAnchor` constructor and the `animationMode` is now required.
* **button**: The `disabled` hosting binding for `MatButton` has changed from a property to an attribute, which
affects any tests using `DebugElement.attributes`.
* **badge:** `_document` parameter has been removed and the `_renderer` parameter is now required in the `MatBadge` constructor.



# 8.0.0-rc.2 "mercury-melody" (2019-05-24)


### Bug Fixes

* **badge:** throw proper error when set on a non-element node ([bdc6811](https://github.com/angular/components/commit/bdc6811))
* **button:** ripples not being clipped to border radius on safari ([#13645](https://github.com/angular/components/issues/13645)) ([6643735](https://github.com/angular/components/commit/6643735))
* **checkbox:** incorrect ripple color when unchecked ([#13569](https://github.com/angular/components/issues/13569)) ([b4a9c62](https://github.com/angular/components/commit/b4a9c62))
* **chips:** able to remove disabled chip via remove button ([#15732](https://github.com/angular/components/issues/15732)) ([20a0930](https://github.com/angular/components/commit/20a0930)), closes [#15708](https://github.com/angular/components/issues/15708)
* **chips:** chip-list doesn't pick up wrapped chips with ivy ([7f12235](https://github.com/angular/components/commit/7f12235))
* **datepicker:** use narrower value for aria-haspopup ([#15666](https://github.com/angular/components/issues/15666)) ([0c62798](https://github.com/angular/components/commit/0c62798))
* **ng-update:** type imports not migrated to secondary entry-points ([#16108](https://github.com/angular/components/issues/16108)) ([dc51691](https://github.com/angular/components/commit/dc51691))
* **popover-edit (experimental):** rework host listeners to account for changes in Ivy ([#16060](https://github.com/angular/components/issues/16060)) ([558295b](https://github.com/angular/components/commit/558295b))
* **popover-edit (experimental):** incorrect template root note retrieved in ivy ([5bf0487](https://github.com/angular/components/commit/5bf0487))
* **schematics:** avoid lint warning in code generated by nav schematic ([#16088](https://github.com/angular/components/issues/16088)) ([6c7fd30](https://github.com/angular/components/commit/6c7fd30)), closes [#16085](https://github.com/angular/components/issues/16085)
* **slide-toggle:** focus ripple not hiding after click/touch ([#13562](https://github.com/angular/components/issues/13562)) ([917a52e](https://github.com/angular/components/commit/917a52e)), closes [#13295](https://github.com/angular/components/issues/13295)
* **table:** better error message if text column is missing a name ([254fb49](https://github.com/angular/components/commit/254fb49))
* **table:** error in Ivy for coerced multiTemplateDataRows ([#16047](https://github.com/angular/components/issues/16047)) ([5259f22](https://github.com/angular/components/commit/5259f22)), closes [#16044](https://github.com/angular/components/issues/16044)
* **table:** schematic generates code that throws an exception ([#15800](https://github.com/angular/components/issues/15800)) ([301371a](https://github.com/angular/components/commit/301371a)), closes [#15788](https://github.com/angular/components/issues/15788)
* **table:** text-column throws if name input is set eagerly with ivy ([e774692](https://github.com/angular/components/commit/e774692))



# 8.0.0-rc.1 "rust-rhubarb" (2019-05-13)


### Bug Fixes

* **checkbox:** don't show hover ripples on touch devices ([#13700](https://github.com/angular/components/issues/13700)) ([43b4fec](https://github.com/angular/components/commit/43b4fec)), closes [#13675](https://github.com/angular/components/issues/13675)
* **drag-drop:** allow for element in DropListRef to be changed ([#15091](https://github.com/angular/components/issues/15091)) ([e630bd6](https://github.com/angular/components/commit/e630bd6)), closes [#15086](https://github.com/angular/components/issues/15086)
* **drag-drop:** don't allow user to move item into container that isn't connected to current one by passing it over an intermediate one that is ([#15660](https://github.com/angular/components/issues/15660)) ([1ac9386](https://github.com/angular/components/commit/1ac9386)), closes [#15191](https://github.com/angular/components/issues/15191)
* **drag-drop:** error if item is removed while dragging ([#15950](https://github.com/angular/components/issues/15950)) ([a632067](https://github.com/angular/components/commit/a632067)), closes [#15827](https://github.com/angular/components/issues/15827)
* **drag-drop:** preview element not maintaining canvas data ([#15808](https://github.com/angular/components/issues/15808)) ([31e72a7](https://github.com/angular/components/commit/31e72a7)), closes [#15685](https://github.com/angular/components/issues/15685)
* **list:** form control cleared when list is destroyed ([#16005](https://github.com/angular/components/issues/16005)) ([40b335c](https://github.com/angular/components/commit/40b335c)), closes [#15994](https://github.com/angular/components/issues/15994)
* **menu:** prevent menu from collapsing to less than one item ([#15454](https://github.com/angular/components/issues/15454)) ([941a0d9](https://github.com/angular/components/commit/941a0d9))
* **overlay:** add panelClass from position to the overlay ([#15853](https://github.com/angular/components/issues/15853)) ([00226f0](https://github.com/angular/components/commit/00226f0))
* **overlay:** allow overlay sass variables to be overwritten ([#15507](https://github.com/angular/components/issues/15507)) ([b1c10d1](https://github.com/angular/components/commit/b1c10d1)), closes [#15467](https://github.com/angular/components/issues/15467)
* **popover-edit (experimental):** direction not being passed to overlay ([#15951](https://github.com/angular/components/issues/15951)) ([7774ae1](https://github.com/angular/components/commit/7774ae1))
* **portal:** correct return type of TemplatePortal.attach ([#14602](https://github.com/angular/components/issues/14602)) ([70bc4d5](https://github.com/angular/components/commit/70bc4d5)), closes [#14584](https://github.com/angular/components/issues/14584)
* **scrolling:** virtual scroll not disconnecting from data source on destroy ([#15856](https://github.com/angular/components/issues/15856)) ([8494f03](https://github.com/angular/components/commit/8494f03)), closes [#15855](https://github.com/angular/components/issues/15855)
* **select:** optionSelectionChanges not emitting when the list of options changes ([#14814](https://github.com/angular/components/issues/14814)) ([f6cd86e](https://github.com/angular/components/commit/f6cd86e))


### Features

* **autocomplete:** add input to control position ([#15834](https://github.com/angular/components/issues/15834)) ([5aaca54](https://github.com/angular/components/commit/5aaca54)), closes [#15640](https://github.com/angular/components/issues/15640)
* **drag-drop:** allow element to be passed in as the boundary ([#15810](https://github.com/angular/components/issues/15810)) ([399f25e](https://github.com/angular/components/commit/399f25e)), closes [#15766](https://github.com/angular/components/issues/15766)
* **radio:** support theme color on mat-radio-group ([#15741](https://github.com/angular/components/issues/15741)) ([6c03e2f](https://github.com/angular/components/commit/6c03e2f)), closes [#15701](https://github.com/angular/components/issues/15701)



# 8.0.0-rc.0 "plastic-portal" (2019-04-29)


### Project Organization

* The repo name has changed from `angular/material2` to `angular/components`
* All files under `src/lib` have been moved under `src/material`


### Bug Fixes

* **autocomplete:** make template ViewChild query `static: true` ([#15877](https://github.com/angular/components/issues/15877)) ([388baa2](https://github.com/angular/components/commit/388baa2))
* **drag-drop:** not reacting to changes in the cdkDragFreeDragPosition ([#15805](https://github.com/angular/components/issues/15805)) ([021b85a](https://github.com/angular/components/commit/021b85a)), closes [#15765](https://github.com/angular/components/issues/15765)
* **stepper:** Fix visual flake in focusing stepper header ([#15870](https://github.com/angular/components/issues/15870)) ([8b5c0f1](https://github.com/angular/components/commit/8b5c0f1))


### Features

* **table:** add text column for simple columns ([#14841](https://github.com/angular/components/issues/14841)) ([cf76707](https://github.com/angular/components/commit/cf76707))



# 8.0.0-beta.2 "helium-blockade" (2019-04-15)

**Imminent Important Import Deprecation**:

Importing directly from the root `@angular/material` entry-point is deprecated. You should instead
import from specific entry-points, e.g. `@angular/material/button`. This aligns with `@angular/cdk`,
makes clear where symbols originate, and helps safeguard against including unused code. The
deprecated style will be removed in Angular v9.

Angular CLI users can use `ng update @angular/material` to automatically migrate imports to the new
style.

### Breaking Changes

* **tabs:** `_ngZone` and `_platform` parameters in `MatTabHeader` constructor are now required.
* **tabs:** `changeDetectorRef` parameter in `MatTabBody` constructor is now required.
* **expansion:** The `_document` and `_animationMode` parameters are now required.
* **list:** `_elementRef` parameter in `MatList` constructor is now required.
* **list:** `_changeDetectorRef` parameter in `MatListItem` constructor is now required. Also the order of constructor parameters has changed.
* **progress-spinner:** The `animationMode` mode parameter is now required in the `MatProgressSpinner` and `MatSpinner` constructors.
* **progress-spinner:** The `_elementRef` parameter has changed from `ElementRef<any>` to `ElementRef<HTMLElement>` in the `MatProgressSpinner` and `MatSpinner` constructors.
* **button:** `_platform` parameter has been removed from the `MatButton` constructor and the `_animationMode` is now required.
* **button:** `platform` parameter has been removed from the `MatAnchor` constructor and the `animationMode` is now required.
* **badge:** `_document` parameter has been removed and the `_renderer` parameter is now required in the `MatBadge` constructor.


# 8.0.0-beta.1 "suede-banana" (2019-04-08)


### Features

* run v8 migration schematics for v8 beta and rc releases ([#15753](https://github.com/angular/material2/issues/15753)) ([bb5d544](https://github.com/angular/material2/commit/bb5d544))



# 8.0.0-beta.0 "spidersilk-barbell" (2019-04-05)

### Project setup
* `@angular/material` now has an explicit peer dependency on `@angular/forms`.
It was always required, but is now correctly listed in the `package.json`.


### Bug Fixes

* **a11y:** don't set aria description if it's the same as the node's aria-label ([#15250](https://github.com/angular/material2/issues/15250)) ([1bc8bc4](https://github.com/angular/material2/commit/1bc8bc4)), closes [#15048](https://github.com/angular/material2/issues/15048)
* **autocomplete:** remove old classes when classlist has changed ([#15185](https://github.com/angular/material2/issues/15185)) ([413fe33](https://github.com/angular/material2/commit/413fe33)), closes [#15179](https://github.com/angular/material2/issues/15179)
* **badge:** disable animations when using NoopAnimationsModule ([#11408](https://github.com/angular/material2/issues/11408)) ([4614fb8](https://github.com/angular/material2/commit/4614fb8))
* **badge:** increase font size of small badge ([#15280](https://github.com/angular/material2/issues/15280)) ([2b14952](https://github.com/angular/material2/commit/2b14952)), closes [#15251](https://github.com/angular/material2/issues/15251)
* **bottom-sheet:** focus trap not being attached when autoFocus is disabled ([#15125](https://github.com/angular/material2/issues/15125)) ([3787695](https://github.com/angular/material2/commit/3787695)), closes [#15119](https://github.com/angular/material2/issues/15119)
* **drag-drop:** clear duplicate ids from descendants ([#15135](https://github.com/angular/material2/issues/15135)) ([751fe8a](https://github.com/angular/material2/commit/751fe8a)), closes [#15120](https://github.com/angular/material2/issues/15120)
* **drag-drop:** disabled value not being synced to drop list ref ([#15065](https://github.com/angular/material2/issues/15065)) ([1aafdbe](https://github.com/angular/material2/commit/1aafdbe))
* **drag-drop:** dragged styling not being removed when exiting component with OnPush ([#15266](https://github.com/angular/material2/issues/15266)) ([9bbbb80](https://github.com/angular/material2/commit/9bbbb80)), closes [#15233](https://github.com/angular/material2/issues/15233)
* **drag-drop:** handle delay coming in as a string ([#15425](https://github.com/angular/material2/issues/15425)) ([8bbb116](https://github.com/angular/material2/commit/8bbb116))
* **drag-drop:** preview not being rendered inside fullscreen element ([#15066](https://github.com/angular/material2/issues/15066)) ([f1e1528](https://github.com/angular/material2/commit/f1e1528)), closes [#15033](https://github.com/angular/material2/issues/15033)
* **examples:** fix form-field-custom-control ([#15147](https://github.com/angular/material2/issues/15147)) ([83135e1](https://github.com/angular/material2/commit/83135e1)), closes [#14810](https://github.com/angular/material2/issues/14810)
* **icon:** clearing user content when svgIcon is bound to falsy value ([#15290](https://github.com/angular/material2/issues/15290)) ([d646266](https://github.com/angular/material2/commit/d646266))
* **input:** no focus on click in IE if clicked outside native control ([#15108](https://github.com/angular/material2/issues/15108)) ([2652532](https://github.com/angular/material2/commit/2652532)), closes [#15093](https://github.com/angular/material2/issues/15093)
* **layout:** breakpoint observer completing unrelated subscribers when preceding subscriber unsubscribes ([#14988](https://github.com/angular/material2/issues/14988)) ([0d054db](https://github.com/angular/material2/commit/0d054db)), closes [#14983](https://github.com/angular/material2/issues/14983)
* **list:** changed after checked error with preselected values in selection list ([#15388](https://github.com/angular/material2/issues/15388)) ([d6f2729](https://github.com/angular/material2/commit/d6f2729)), closes [#15386](https://github.com/angular/material2/issues/15386)
* **list:** not picking up indirect descendant lines ([#15552](https://github.com/angular/material2/issues/15552)) ([a258400](https://github.com/angular/material2/commit/a258400)), closes [#15466](https://github.com/angular/material2/issues/15466)
* **menu:** support focus first/last item via home/end keys ([#14896](https://github.com/angular/material2/issues/14896)) ([0185dd1](https://github.com/angular/material2/commit/0185dd1))
* **overlay:** flexible position strategy throwing error for empty strings ([#14935](https://github.com/angular/material2/issues/14935)) ([6e52023](https://github.com/angular/material2/commit/6e52023))
* **progress-bar:** clear aria-valuenow in indeterminate or query mode ([#15019](https://github.com/angular/material2/issues/15019)) ([a88d053](https://github.com/angular/material2/commit/a88d053)), closes [#15016](https://github.com/angular/material2/issues/15016)
* **progress-spinner:** clear aria-valuenow in indeterminate mode ([#15052](https://github.com/angular/material2/issues/15052)) ([dd4257e](https://github.com/angular/material2/commit/dd4257e)), closes [#15018](https://github.com/angular/material2/issues/15018)
* **radio:** underlying label not expanding to width of radio button ([#14895](https://github.com/angular/material2/issues/14895)) ([677db8c](https://github.com/angular/material2/commit/677db8c)), closes [#14894](https://github.com/angular/material2/issues/14894)
* **schematics:** ensure project "style" and "skipTests" options are respected ([#15513](https://github.com/angular/material2/issues/15513)) ([fe6629a](https://github.com/angular/material2/commit/fe6629a)), closes [#15502](https://github.com/angular/material2/issues/15502)
* **select:** error when navigating via keyboard to reset option on a closed select ([#15160](https://github.com/angular/material2/issues/15160)) ([a115b3a](https://github.com/angular/material2/commit/a115b3a)), closes [#14540](https://github.com/angular/material2/issues/14540) [#15159](https://github.com/angular/material2/issues/15159)
* **select:** update panel width if the viewport size changes ([#14932](https://github.com/angular/material2/issues/14932)) ([78f55ea](https://github.com/angular/material2/commit/78f55ea)), closes [#7811](https://github.com/angular/material2/issues/7811)
* **slide-toggle:** thumb animation not working on mobile ([#15236](https://github.com/angular/material2/issues/15236)) ([48d17af](https://github.com/angular/material2/commit/48d17af)), closes [#15232](https://github.com/angular/material2/issues/15232)
* **stepper:** content not being rendered out initially with ivy ([#15485](https://github.com/angular/material2/issues/15485)) ([876727d](https://github.com/angular/material2/commit/876727d))
* **table:** use default change detection strategy on table ([#15440](https://github.com/angular/material2/issues/15440)) ([f82259b](https://github.com/angular/material2/commit/f82259b))
* **table:** use static queries for examples ([#15483](https://github.com/angular/material2/issues/15483)) ([d525f9c](https://github.com/angular/material2/commit/d525f9c))
* **tooltip:** render style values in ngOnInit instead of the constructor ([#15469](https://github.com/angular/material2/issues/15469)) ([59818d1](https://github.com/angular/material2/commit/59818d1))
* **typography:** move header letter spacing into typography config ([#15210](https://github.com/angular/material2/issues/15210)) ([0673574](https://github.com/angular/material2/commit/0673574)), closes [#15197](https://github.com/angular/material2/issues/15197)
* add peer dependency on [@angular](https://github.com/angular)/forms ([#15133](https://github.com/angular/material2/issues/15133)) ([8fc97ac](https://github.com/angular/material2/commit/8fc97ac)), closes [#15085](https://github.com/angular/material2/issues/15085)
* mark virtual scroll viewport queries as static ([#15346](https://github.com/angular/material2/issues/15346)) ([e739e61](https://github.com/angular/material2/commit/e739e61))
* missing tag in footer-row of material table ([#15711](https://github.com/angular/material2/issues/15711)) ([578790b](https://github.com/angular/material2/commit/578790b))

### Features

* **a11y:** add injection token configure default politeness and duration ([#15126](https://github.com/angular/material2/issues/15126)) ([e2c9873](https://github.com/angular/material2/commit/e2c9873)), closes [#15121](https://github.com/angular/material2/issues/15121)
* **dialog:** add ariaLabelledBy config option ([#14943](https://github.com/angular/material2/issues/14943)) ([3e935e9](https://github.com/angular/material2/commit/3e935e9))
* **drag-drop:** add API to get/set current position of a standalone draggable ([#14696](https://github.com/angular/material2/issues/14696)) ([2f009d0](https://github.com/angular/material2/commit/2f009d0)), closes [#14420](https://github.com/angular/material2/issues/14420) [#14674](https://github.com/angular/material2/issues/14674)
* **drag-drop:** add the ability to customize how the position is constrained ([#15137](https://github.com/angular/material2/issues/15137)) ([4704653](https://github.com/angular/material2/commit/4704653))
* **drag-drop:** add the ability to disable sorting in a list ([#15064](https://github.com/angular/material2/issues/15064)) ([629460f](https://github.com/angular/material2/commit/629460f)), closes [#14838](https://github.com/angular/material2/issues/14838)
* **drag-drop:** allow for dragging sequence to be delayed ([#14732](https://github.com/angular/material2/issues/14732)) ([bcf2781](https://github.com/angular/material2/commit/bcf2781)), closes [#13908](https://github.com/angular/material2/issues/13908)
* **menu:** allow focus restoration to be disabled ([#15205](https://github.com/angular/material2/issues/15205)) ([dfa40fc](https://github.com/angular/material2/commit/dfa40fc)), closes [#15168](https://github.com/angular/material2/issues/15168)
* **overlay:** allow for scroll strategy to be swapped out ([#15067](https://github.com/angular/material2/issues/15067)) ([3308187](https://github.com/angular/material2/commit/3308187)), closes [#12306](https://github.com/angular/material2/issues/12306)
* **popover-edit (experimental):** experimental popover edit for tables (mvp) ([#15496](https://github.com/angular/material2/issues/15496)) ([457ff28](https://github.com/angular/material2/commit/457ff28))
* **selection-list:** support specifying theme color ([#15237](https://github.com/angular/material2/issues/15237)) ([66d38fc](https://github.com/angular/material2/commit/66d38fc)), closes [#15234](https://github.com/angular/material2/issues/15234)
* **stepper:** allow disabling ripples of headers ([#14972](https://github.com/angular/material2/issues/14972)) ([a6cc98f](https://github.com/angular/material2/commit/a6cc98f)), closes [#14940](https://github.com/angular/material2/issues/14940)


### Performance Improvements

* **focus-monitor:** avoid triggering change detection if there are no subscribers to stream ([#14964](https://github.com/angular/material2/issues/14964)) ([085bbb7](https://github.com/angular/material2/commit/085bbb7))



## 7.3.7 "herringbone-harpsichord" (2019-04-04)


### Bug Fixes

* **bottom-sheet:** unable to reopen same bottom sheet after closing via back button ([#15520](https://github.com/angular/material2/issues/15520)) ([aae6972](https://github.com/angular/material2/commit/aae6972)), closes [#15510](https://github.com/angular/material2/issues/15510)
* **chips:** remove aria-selected from deselected chip in single selection mode ([#15634](https://github.com/angular/material2/issues/15634)) ([ebbf97e](https://github.com/angular/material2/commit/ebbf97e)), closes [#15617](https://github.com/angular/material2/issues/15617)
* error when attempting to access Intl API on some versions of Windows ([#15693](https://github.com/angular/material2/issues/15693)) ([c02b09c](https://github.com/angular/material2/commit/c02b09c)), closes [#15687](https://github.com/angular/material2/issues/15687)
* **dialog:** remove default aria-label from mat-dialog-close ([#15654](https://github.com/angular/material2/issues/15654)) ([307889e](https://github.com/angular/material2/commit/307889e)), closes [#15542](https://github.com/angular/material2/issues/15542)
* **form-field:** remove nonbreaking space before * for required fields ([#15490](https://github.com/angular/material2/issues/15490)) ([5e7cf22](https://github.com/angular/material2/commit/5e7cf22))
* **option:** Remove aria-selected='false' in single-selection mode ([#15617](https://github.com/angular/material2/issues/15617)) ([61a608b](https://github.com/angular/material2/commit/61a608b))
* **schematics:** use ngAfterViewInit instead of ngOnInit in table ([#15446](https://github.com/angular/material2/issues/15446)) ([9c34b97](https://github.com/angular/material2/commit/9c34b97))
* **sidenav:** some internal subjects not being completed ([#15567](https://github.com/angular/material2/issues/15567)) ([073e542](https://github.com/angular/material2/commit/073e542))


## 7.3.6 "tar-trebuchet" (2019-03-25)


### Bug Fixes

* add disabled styling for unchecked pseudo checkbox ([#15405](https://github.com/angular/material2/issues/15405)) ([bd1c973](https://github.com/angular/material2/commit/bd1c973))
* **autofill:** use static queries to read values used in ngOnInit ([#15516](https://github.com/angular/material2/issues/15516)) ([cb0b025](https://github.com/angular/material2/commit/cb0b025))
* **form-field:** select value text blending in with the background in high contrast mode ([#15286](https://github.com/angular/material2/issues/15286)) ([bbd30fb](https://github.com/angular/material2/commit/bbd30fb))
* **icon:** clear user content when svgIcon is bound to falsy value ([#15290](https://github.com/angular/material2/issues/15290)) ([f2f1232](https://github.com/angular/material2/commit/f2f1232))
* **slide-toggle:** be able to receive focus while disabled on click ([#15501](https://github.com/angular/material2/issues/15501)) ([479618e](https://github.com/angular/material2/commit/479618e))
* **tooltip:** tooltip sample not working with keyboard navigation. ([#15111](https://github.com/angular/material2/issues/15111)) ([3987b9b](https://github.com/angular/material2/commit/3987b9b))



## 7.3.5 "asphalt-lightning" (2019-03-18)


### Bug Fixes

* **schematics:** do not run migrations multiple times ([#15424](https://github.com/angular/material2/issues/15424)) ([7b77740](https://github.com/angular/material2/commit/7b77740))
* **stepper:** avoid breaking change in stepControl type ([#15464](https://github.com/angular/material2/issues/15464)) ([f02ebe1](https://github.com/angular/material2/commit/f02ebe1)), closes [#15134](https://github.com/angular/material2/issues/15134) [#15462](https://github.com/angular/material2/issues/15462)



## 7.3.4 "tapioca-turtle" (2019-03-11)


### Bug Fixes

* **badge:** duplicate leftover badge after server-side render ([#15417](https://github.com/angular/material2/issues/15417)) ([815a729](https://github.com/angular/material2/commit/815a729))
* **calendar:** should markForCheck when properties are changed ([#15102](https://github.com/angular/material2/issues/15102)) ([4aa5535](https://github.com/angular/material2/commit/4aa5535))
* **datepicker:** toggle throwing an error if datepicker is not defined on init ([#15256](https://github.com/angular/material2/issues/15256)) ([3c5e671](https://github.com/angular/material2/commit/3c5e671))
* **form-field:** allow user to click through arrow on native select ([#15328](https://github.com/angular/material2/issues/15328)) ([cb057d2](https://github.com/angular/material2/commit/cb057d2)), closes [#15318](https://github.com/angular/material2/issues/15318)
* **form-field:** infinite loop with zone-patch-rxjs ([#15335](https://github.com/angular/material2/issues/15335)) ([8581556](https://github.com/angular/material2/commit/8581556)), closes [#15331](https://github.com/angular/material2/issues/15331)
* **list:** action list missing focus and hover styling ([#14147](https://github.com/angular/material2/issues/14147)) ([3f876e2](https://github.com/angular/material2/commit/3f876e2))
* **list:** override native button text align in action list ([#15404](https://github.com/angular/material2/issues/15404)) ([aaec2d5](https://github.com/angular/material2/commit/aaec2d5))
* **radio:** ng-touched incorrectly being set on click ([#12560](https://github.com/angular/material2/issues/12560)) ([5b04ec3](https://github.com/angular/material2/commit/5b04ec3))
* **radio:** only show focus ripple for keyboard focus ([#13565](https://github.com/angular/material2/issues/13565)) ([87477c3](https://github.com/angular/material2/commit/87477c3)), closes [#13544](https://github.com/angular/material2/issues/13544)
* **radio:** unable to distinguish disabled radio button in high contrast mode ([#15375](https://github.com/angular/material2/issues/15375)) ([230b1ed](https://github.com/angular/material2/commit/230b1ed))
* **schematics:** incorrectly throws if NgModule uses namespaced decorator ([#15298](https://github.com/angular/material2/issues/15298)) ([89c48f4](https://github.com/angular/material2/commit/89c48f4))
* **scrolling:** virtual scroll viewport error during server-side rendering ([#15299](https://github.com/angular/material2/issues/15299)) ([78e7207](https://github.com/angular/material2/commit/78e7207)), closes [#15291](https://github.com/angular/material2/issues/15291)
* **select:** Fixes width-issue of select option panel in IE ([#11801](https://github.com/angular/material2/issues/11801)) ([81a73c6](https://github.com/angular/material2/commit/81a73c6)), closes [#11609](https://github.com/angular/material2/issues/11609)
* **sort:** remove arrow when sort header is disabled ([#15212](https://github.com/angular/material2/issues/15212)) ([4a7fdfe](https://github.com/angular/material2/commit/4a7fdfe)), closes [#14986](https://github.com/angular/material2/issues/14986)
* **stepper:** unable to tab to step content ([#14892](https://github.com/angular/material2/issues/14892)) ([824aad2](https://github.com/angular/material2/commit/824aad2))
* **tabs:** correct example title ([#15325](https://github.com/angular/material2/issues/15325)) ([f1ca6ff](https://github.com/angular/material2/commit/f1ca6ff))
* **virtual-scroll:** move views that are already attached instead of inserting ([#15348](https://github.com/angular/material2/issues/15348)) ([8dc572d](https://github.com/angular/material2/commit/8dc572d))



## 7.3.3 "cashmere-armor" (2019-02-20)


### Bug Fixes

* **theming**: fix errors when building theme using CSS variables ([#15140](https://github.com/angular/material2/issues/15140)) ([96f6e06](https://github.com/angular/material2/commit/96f6e06)), closes [#15107](https://github.com/angular/material2/issues/15107)
* **bidi:** handle uppercase values correctly ([#14773](https://github.com/angular/material2/issues/14773)) ([0029cde](https://github.com/angular/material2/commit/0029cde))
* **dialog:** don't assign aria-label to close button if button has text ([#11093](https://github.com/angular/material2/issues/11093)) ([9bf368d](https://github.com/angular/material2/commit/9bf368d)), closes [#11084](https://github.com/angular/material2/issues/11084)
* **list:** disableRipple on selection list not affecting list options after init ([#14858](https://github.com/angular/material2/issues/14858)) ([edf4541](https://github.com/angular/material2/commit/edf4541))
* **schematics:** do not generate invalid stylesheet files ([#15235](https://github.com/angular/material2/issues/15235)) ([e7422e4](https://github.com/angular/material2/commit/e7422e4)), closes [#15164](https://github.com/angular/material2/issues/15164)
* **table:** add missing rowgroup roles ([#15131](https://github.com/angular/material2/issues/15131)) ([2c7bc1c](https://github.com/angular/material2/commit/2c7bc1c))



## 7.3.2 "jute-box" (2019-02-11)


### Bug Fixes

* **autocomplete:** set aria-haspopup ([#15079](https://github.com/angular/material2/issues/15079)) ([45bd5d4](https://github.com/angular/material2/commit/45bd5d4))
* **checkbox:** unable to click to select if text is marked ([#15062](https://github.com/angular/material2/issues/15062)) ([4819c5b](https://github.com/angular/material2/commit/4819c5b)), closes [#14967](https://github.com/angular/material2/issues/14967)
* **drag-drop:** set class when item or list is disabled ([#14769](https://github.com/angular/material2/issues/14769)) ([c543cf6](https://github.com/angular/material2/commit/c543cf6)), closes [#14760](https://github.com/angular/material2/issues/14760)
* **drag-drop:** standalone draggable drag class not being applied with OnPush change detection ([#14727](https://github.com/angular/material2/issues/14727)) ([2f63195](https://github.com/angular/material2/commit/2f63195))
* **icon:** add notranslate class ([#14889](https://github.com/angular/material2/issues/14889)) ([39fa928](https://github.com/angular/material2/commit/39fa928))
* **menu:** prevent removal of mat-elevation class ([#15035](https://github.com/angular/material2/issues/15035)) ([8069641](https://github.com/angular/material2/commit/8069641))
* **slide-toggle:** input element should use switch role ([#15073](https://github.com/angular/material2/issues/15073)) ([3af7748](https://github.com/angular/material2/commit/3af7748)), closes [#14949](https://github.com/angular/material2/issues/14949)
* **tree:** opposite direction padding not being reset on change ([#14816](https://github.com/angular/material2/issues/14816)) ([ae4a5ae](https://github.com/angular/material2/commit/ae4a5ae))



## 7.3.1 "liquidcrystal-sandwich" (2019-02-04)


### Bug Fixes

* **button:** not updating DOM node name if group name changes ([#14963](https://github.com/angular/material2/issues/14963)) ([37732cb](https://github.com/angular/material2/commit/37732cb))
* **cdk-stepper:** coercing selectedIndex value to a Number ([#14817](https://github.com/angular/material2/issues/14817)) ([b64c08d](https://github.com/angular/material2/commit/b64c08d))
* **checkbox:** not marked as touched immediately on blur with OnPush change detection ([#15001](https://github.com/angular/material2/issues/15001)) ([916c532](https://github.com/angular/material2/commit/916c532)), closes [#14980](https://github.com/angular/material2/issues/14980)
* **chips:** newly-added chips not being disabled when added to a disable list ([#14976](https://github.com/angular/material2/issues/14976)) ([c23512a](https://github.com/angular/material2/commit/c23512a))
* **examples:** fix form-field custom control `disabled` input ([#14957](https://github.com/angular/material2/issues/14957)) ([ce3926d](https://github.com/angular/material2/commit/ce3926d)), closes [/github.com/angular/angular/blob/e2c98fbe11272295c3827b0e54f859d283cd32bf/packages/forms/src/directives/reactive_errors.ts#L64](https://github.com//github.com/angular/angular/blob/e2c98fbe11272295c3827b0e54f859d283cd32bf/packages/forms/src/directives/reactive_errors.ts/issues/L64)
* **list:** selection list not picking up indirect descendants ([#15003](https://github.com/angular/material2/issues/15003)) ([6a07d0d](https://github.com/angular/material2/commit/6a07d0d)), closes [#15000](https://github.com/angular/material2/issues/15000)
* **MatPseudoCheckbox:** fix checkmark pseudo-element box-sizing ([#14971](https://github.com/angular/material2/issues/14971)) ([ba6b405](https://github.com/angular/material2/commit/ba6b405))
* **overlay:** unnecessarily pushing overlay if it is exactly as wide as the viewport ([#14975](https://github.com/angular/material2/issues/14975)) ([f4b4e61](https://github.com/angular/material2/commit/f4b4e61)), closes [#14968](https://github.com/angular/material2/issues/14968)
* **radio:** not updating DOM node name if group name changes ([#14950](https://github.com/angular/material2/issues/14950)) ([4d5c5d5](https://github.com/angular/material2/commit/4d5c5d5))
* **radio:** unable to click to select button if text is marked ([#14967](https://github.com/angular/material2/issues/14967)) ([81380d2](https://github.com/angular/material2/commit/81380d2)), closes [#14753](https://github.com/angular/material2/issues/14753)
* **slider:** focus ring showing when ancestor has focus monitoring ([#14960](https://github.com/angular/material2/issues/14960)) ([2ec9dff](https://github.com/angular/material2/commit/2ec9dff)), closes [#14958](https://github.com/angular/material2/issues/14958)
* **table:** allow for a caption to be projected ([#14965](https://github.com/angular/material2/issues/14965)) ([a8a6617](https://github.com/angular/material2/commit/a8a6617)), closes [#14948](https://github.com/angular/material2/issues/14948)
* **table:** Clarify unknown table column error ([#14947](https://github.com/angular/material2/issues/14947)) ([2782273](https://github.com/angular/material2/commit/2782273))
* **tree,scrolling:** don't require user DataSource to extend DataSource ([#14966](https://github.com/angular/material2/issues/14966)) ([0f9926a](https://github.com/angular/material2/commit/0f9926a))



# 7.3.0 "pyrite-pixie" (2019-01-28)


### Bug Fixes

* **autocomplete:** not updating origin if it changes after init ([#14677](https://github.com/angular/material2/issues/14677)) ([4913c36](https://github.com/angular/material2/commit/4913c36))
* **bottom-sheet:** allow disableClose to be updated after opened ([#14711](https://github.com/angular/material2/issues/14711)) ([3d3179f](https://github.com/angular/material2/commit/3d3179f)), closes [#14708](https://github.com/angular/material2/issues/14708)
* **button:** focus indication hard to see in high contrast mode ([#13259](https://github.com/angular/material2/issues/13259)) ([fffbcb1](https://github.com/angular/material2/commit/fffbcb1))
* **button-toggle:** remove references to selected toggle on destroy ([#14627](https://github.com/angular/material2/issues/14627)) ([98f0142](https://github.com/angular/material2/commit/98f0142))
* **datepicker:** update validation when switching from null to error input ([#14423](https://github.com/angular/material2/issues/14423)) ([5aefe60](https://github.com/angular/material2/commit/5aefe60))
* **drag-drop:** apply translation transform before user transforms ([#14712](https://github.com/angular/material2/issues/14712)) ([349675a](https://github.com/angular/material2/commit/349675a)), closes [#14699](https://github.com/angular/material2/issues/14699)
* **drag-drop:** dragging styling not being reset in some cases with OnPush change detection ([#14725](https://github.com/angular/material2/issues/14725)) ([1d4bb18](https://github.com/angular/material2/commit/1d4bb18))
* **drag-drop:** incorrectly preserving transform if root element changes ([#14697](https://github.com/angular/material2/issues/14697)) ([3656a4e](https://github.com/angular/material2/commit/3656a4e))
* **drag-drop:** restore initial transform when resetting ([#14701](https://github.com/angular/material2/issues/14701)) ([005fb46](https://github.com/angular/material2/commit/005fb46))
* **drag-drop:** unable to move item into connected container by passing through another container ([#14651](https://github.com/angular/material2/issues/14651)) ([0bd93dd](https://github.com/angular/material2/commit/0bd93dd)), closes [#14645](https://github.com/angular/material2/issues/14645)
* **focus-trap:** apply aria-hidden to focus trap tab anchors ([#14644](https://github.com/angular/material2/issues/14644)) ([f66302d](https://github.com/angular/material2/commit/f66302d))
* **icon:** clean up cached references in icon registry on destroy ([#14801](https://github.com/angular/material2/issues/14801)) ([f6b4288](https://github.com/angular/material2/commit/f6b4288))
* **list:** action list button outline not being reset on firefox ([#14693](https://github.com/angular/material2/issues/14693)) ([73d0fb9](https://github.com/angular/material2/commit/73d0fb9))
* **list:** deselect option if value doesn't match up ([#14800](https://github.com/angular/material2/issues/14800)) ([551ded5](https://github.com/angular/material2/commit/551ded5)), closes [#14734](https://github.com/angular/material2/issues/14734)
* **list:** disableRipple on list input not taking effect after init ([#14836](https://github.com/angular/material2/issues/14836)) ([463ac9e](https://github.com/angular/material2/commit/463ac9e)), closes [#14824](https://github.com/angular/material2/issues/14824)
* **menu:** not unsubscribing from close stream if trigger is destroyed ([#14107](https://github.com/angular/material2/issues/14107)) ([80f510f](https://github.com/angular/material2/commit/80f510f))
* **overlay:** not sizing flexible overlay correctly when opening downwards on a scrollable page ([#14672](https://github.com/angular/material2/issues/14672)) ([40f8b20](https://github.com/angular/material2/commit/40f8b20))
* **overlay:** reset transform when disposing of position strategy ([#14660](https://github.com/angular/material2/issues/14660)) ([86c530e](https://github.com/angular/material2/commit/86c530e)), closes [#14657](https://github.com/angular/material2/issues/14657)
* **overlay:** update size if dimensions change in overlay directives ([#14610](https://github.com/angular/material2/issues/14610)) ([c92d8c9](https://github.com/angular/material2/commit/c92d8c9)), closes [#7811](https://github.com/angular/material2/issues/7811)
* **slide-toggle:** use default hue for thumb in dark theme ([#14230](https://github.com/angular/material2/issues/14230)) ([7d96ed3](https://github.com/angular/material2/commit/7d96ed3)), closes [#14192](https://github.com/angular/material2/issues/14192)
* **sort:** extra Firefox focus outline not being reset ([#14733](https://github.com/angular/material2/issues/14733)) ([027d4f4](https://github.com/angular/material2/commit/027d4f4))
* **stepper:** ensure step state is not minified ([#14933](https://github.com/angular/material2/issues/14933)) ([e7b0e40](https://github.com/angular/material2/commit/e7b0e40))
* **table:** not re-rendering when switching to a smaller set of data than the current page ([#14665](https://github.com/angular/material2/issues/14665)) ([a31a2ff](https://github.com/angular/material2/commit/a31a2ff)), closes [#12586](https://github.com/angular/material2/issues/12586) [#14010](https://github.com/angular/material2/issues/14010)
* **tabs:** better handling of animationDuration without units ([#14778](https://github.com/angular/material2/issues/14778)) ([6f49813](https://github.com/angular/material2/commit/6f49813)), closes [#13428](https://github.com/angular/material2/issues/13428)
* **tabs:** don't handle keyboard events with modifier keys ([#14234](https://github.com/angular/material2/issues/14234)) ([76cb9d0](https://github.com/angular/material2/commit/76cb9d0))
* **tabs:** pagination not working correctly on chrome in rtl mode ([#14690](https://github.com/angular/material2/issues/14690)) ([220e6b2](https://github.com/angular/material2/commit/220e6b2)), closes [#14689](https://github.com/angular/material2/issues/14689)
* **tooltip:** afterHidden stream not being completed ([#14620](https://github.com/angular/material2/issues/14620)) ([0394d59](https://github.com/angular/material2/commit/0394d59))


### Features

* **dialog:** support adding and removing classes via dialogRef ([#14772](https://github.com/angular/material2/issues/14772)) ([b62f3f3](https://github.com/angular/material2/commit/b62f3f3)), closes [#6206](https://github.com/angular/material2/issues/6206)
* **drag-drop:** add service for attaching drag&drop to arbitrary DOM nodes ([#14437](https://github.com/angular/material2/issues/14437)) ([5a18ea6](https://github.com/angular/material2/commit/5a18ea6))
* **overlay:** allow for connected overlay to be positioned relative to a point ([#14616](https://github.com/angular/material2/issues/14616)) ([651549f](https://github.com/angular/material2/commit/651549f)), closes [#5007](https://github.com/angular/material2/issues/5007)
* **ripples:** support updating global ripple options at runtime ([#14705](https://github.com/angular/material2/issues/14705)) ([4f755cf](https://github.com/angular/material2/commit/4f755cf)), closes [#9729](https://github.com/angular/material2/issues/9729)
* **tabs:** add automatic scrolling when holding down paginator ([#14632](https://github.com/angular/material2/issues/14632)) ([e661317](https://github.com/angular/material2/commit/e661317)), closes [#6510](https://github.com/angular/material2/issues/6510)
* **tooltip:** allow for default position to be configured ([#14872](https://github.com/angular/material2/issues/14872)) ([342e6f0](https://github.com/angular/material2/commit/342e6f0)), closes [#14862](https://github.com/angular/material2/issues/14862)



## 7.2.1 "acrylic-axolotl" (2019-01-07)


### Bug Fixes

* **a11y:** remove listeners when focus trap anchors are removed ([#14629](https://github.com/angular/material2/issues/14629)) ([17bb9c3](https://github.com/angular/material2/commit/17bb9c3))
* **autocomplete:** adding aria-activedescendant while closed if autoActiveFirstOption is enabled ([#14455](https://github.com/angular/material2/issues/14455)) ([f3065cc](https://github.com/angular/material2/commit/f3065cc)), closes [#14453](https://github.com/angular/material2/issues/14453)
* **checkbox:** incorrect color for disabled indeterminate checkbox ([#14478](https://github.com/angular/material2/issues/14478)) ([0398d53](https://github.com/angular/material2/commit/0398d53)), closes [#14415](https://github.com/angular/material2/issues/14415)
* **datepicker:** native date adapter not preserving time when cloning ([#14691](https://github.com/angular/material2/issues/14691)) ([9e3a77b](https://github.com/angular/material2/commit/9e3a77b))
* **dialog:** complete injectable streams on destroy ([#14254](https://github.com/angular/material2/issues/14254)) ([e673608](https://github.com/angular/material2/commit/e673608))
* **drag-drop:** don't disable native drag interactions if dragging is disabled ([#14233](https://github.com/angular/material2/issues/14233)) ([9fa3376](https://github.com/angular/material2/commit/9fa3376))
* **drag-drop:** update root element if selector changes ([#14426](https://github.com/angular/material2/issues/14426)) ([14b90db](https://github.com/angular/material2/commit/14b90db))
* **form-field:** proper arrow color for native select ([#14490](https://github.com/angular/material2/issues/14490)) ([3824a05](https://github.com/angular/material2/commit/3824a05))
* **input:** unable to reset focused state of readonly input ([#14698](https://github.com/angular/material2/issues/14698)) ([98711d7](https://github.com/angular/material2/commit/98711d7))
* **list:** add hover and focus indication in high contrast mode ([#14637](https://github.com/angular/material2/issues/14637)) ([3c71348](https://github.com/angular/material2/commit/3c71348))
* **menu:** hasBackdrop not being updated after first open ([#14561](https://github.com/angular/material2/issues/14561)) ([268b0e8](https://github.com/angular/material2/commit/268b0e8)), closes [#14560](https://github.com/angular/material2/issues/14560)
* **menu:** scroll position jumping to top after animation is done on scrollable menu ([#14190](https://github.com/angular/material2/issues/14190)) ([37a7080](https://github.com/angular/material2/commit/37a7080)), closes [#11859](https://github.com/angular/material2/issues/11859) [#11790](https://github.com/angular/material2/issues/11790)
* **moment-adapter:** incorrectly deserializing moment dates and not setting locale on deserialized values ([#14685](https://github.com/angular/material2/issues/14685)) ([36db1c0](https://github.com/angular/material2/commit/36db1c0))
* **overlay:** not updating hasBackdrop after first open ([#14562](https://github.com/angular/material2/issues/14562)) ([61d3cf8](https://github.com/angular/material2/commit/61d3cf8)), closes [#14561](https://github.com/angular/material2/issues/14561)
* **radio:** host element unable to receive focus events ([#14472](https://github.com/angular/material2/issues/14472)) ([8c35917](https://github.com/angular/material2/commit/8c35917)), closes [#13323](https://github.com/angular/material2/issues/13323) [#13953](https://github.com/angular/material2/issues/13953)
* **select:** announce value changes with arrow keys while closed ([#14540](https://github.com/angular/material2/issues/14540)) ([3f9a125](https://github.com/angular/material2/commit/3f9a125))
* **select:** don't shift arrow if there is no label ([#14607](https://github.com/angular/material2/issues/14607)) ([7188719](https://github.com/angular/material2/commit/7188719)), closes [#13907](https://github.com/angular/material2/issues/13907)
* **select:** form field state not updated if options are reset ([#14720](https://github.com/angular/material2/issues/14720)) ([391a9fd](https://github.com/angular/material2/commit/391a9fd)), closes [#14709](https://github.com/angular/material2/issues/14709)
* **slider:** don't handle keyboard events with modifier keys ([#14675](https://github.com/angular/material2/issues/14675)) ([7d2748e](https://github.com/angular/material2/commit/7d2748e))
* **typography:** deprecation warning in latest sass version ([#14673](https://github.com/angular/material2/issues/14673)) ([65ecb08](https://github.com/angular/material2/commit/65ecb08)), closes [#14636](https://github.com/angular/material2/issues/14636)
* **expansion-panel:** add missing injection token for configuring the default options ([#14384](https://github.com/angular/material2/issues/14384)) ([a389704](https://github.com/angular/material2/commit/a389704)), closes [#14383](https://github.com/angular/material2/issues/14383)



# 7.2.0 "gold-snowman" (2018-12-18)


### Bug Fixes

* **a11y:** inconsistent runtime value for ListKeyManager.activeItem ([#14154](https://github.com/angular/material2/issues/14154)) ([c4b3484](https://github.com/angular/material2/commit/c4b3484)), closes [#14152](https://github.com/angular/material2/issues/14152)
* **autocomplete:** update template when changing autocomplete in trigger ([#13814](https://github.com/angular/material2/issues/13814)) ([904a5ea](https://github.com/angular/material2/commit/904a5ea))
* **badge:** aria-label not being updated if description changes ([#14393](https://github.com/angular/material2/issues/14393)) ([ab78183](https://github.com/angular/material2/commit/ab78183))
* **bottom-sheet:** bottom-sheet content not being read out by screen readers ([#14534](https://github.com/angular/material2/issues/14534)) ([9485aff](https://github.com/angular/material2/commit/9485aff)), closes [#10591](https://github.com/angular/material2/issues/10591)
* **cdk/stepper:** exported injection token referring to Material ([#14339](https://github.com/angular/material2/issues/14339)) ([b584888](https://github.com/angular/material2/commit/b584888))
* **chips:** don't handle separator keys while pressing modifiers ([#14424](https://github.com/angular/material2/issues/14424)) ([d1cec1f](https://github.com/angular/material2/commit/d1cec1f))
* **drag-drop:** account for out of view container and stacking order ([#14257](https://github.com/angular/material2/issues/14257)) ([c5be8d3](https://github.com/angular/material2/commit/c5be8d3)), closes [#14231](https://github.com/angular/material2/issues/14231)
* **drag-drop:** error on touch end ([#14392](https://github.com/angular/material2/issues/14392)) ([53cecbb](https://github.com/angular/material2/commit/53cecbb)), closes [#14390](https://github.com/angular/material2/issues/14390)
* **drag-drop:** handle placeholder and preview templates changing after init ([#14541](https://github.com/angular/material2/issues/14541)) ([bfacbb5](https://github.com/angular/material2/commit/bfacbb5))
* **drag-drop:** prevent text selection while dragging on Safari ([#14405](https://github.com/angular/material2/issues/14405)) ([220e388](https://github.com/angular/material2/commit/220e388)), closes [#14403](https://github.com/angular/material2/issues/14403)
* **drag-drop:** showing touch device tap highlight when using a handle ([#14549](https://github.com/angular/material2/issues/14549)) ([8a3d21a](https://github.com/angular/material2/commit/8a3d21a))
* **drag-drop:** throw better error when attaching to non-element node ([#14221](https://github.com/angular/material2/issues/14221)) ([31f0e6d](https://github.com/angular/material2/commit/31f0e6d))
* **drag-drop:** unable to stop dragging after quick double click ([#14506](https://github.com/angular/material2/issues/14506)) ([fbb2a13](https://github.com/angular/material2/commit/fbb2a13))
* **drawer:** ensure all observables are unsubscribed ([#13378](https://github.com/angular/material2/issues/13378)) ([f7dcc27](https://github.com/angular/material2/commit/f7dcc27))
* **form-field:** long labels and option values going under select arrow ([#14268](https://github.com/angular/material2/issues/14268)) ([166279b](https://github.com/angular/material2/commit/166279b))
* **form-field:** native select label floating incorrectly when invalid value is set ([#14263](https://github.com/angular/material2/issues/14263)) ([9c65c87](https://github.com/angular/material2/commit/9c65c87))
* **form-field:** outline gap not being calculated when element starts off invisible ([#13477](https://github.com/angular/material2/issues/13477)) ([e579181](https://github.com/angular/material2/commit/e579181)), closes [#13328](https://github.com/angular/material2/issues/13328)
* **form-field:** outline gap not being recalculated on direction changes ([#13478](https://github.com/angular/material2/issues/13478)) ([b78a750](https://github.com/angular/material2/commit/b78a750))
* **grid-list:** allow more units for gutter width and row height ([#14341](https://github.com/angular/material2/issues/14341)) ([f176119](https://github.com/angular/material2/commit/f176119))
* **menu:** accidentally tapping on sub-menu content that overlaps trigger on touch devices ([#14538](https://github.com/angular/material2/issues/14538)) ([f2a06ab](https://github.com/angular/material2/commit/f2a06ab))
* **menu:** reduce specificity of icon selector ([#14389](https://github.com/angular/material2/issues/14389)) ([74e945a](https://github.com/angular/material2/commit/74e945a))
* **menu:** unable to set icon color dynamically ([#14161](https://github.com/angular/material2/issues/14161)) ([48e4f65](https://github.com/angular/material2/commit/48e4f65)), closes [#14151](https://github.com/angular/material2/issues/14151)
* **schematics:** drag-drop schematic two consecutive commas ([#14446](https://github.com/angular/material2/issues/14446)) ([35fd998](https://github.com/angular/material2/commit/35fd998))
* **schematics:** two consecutive commas generated ([#14371](https://github.com/angular/material2/issues/14371)) ([dd6065c](https://github.com/angular/material2/commit/dd6065c)), closes [#14366](https://github.com/angular/material2/issues/14366)
* **sidenav:** content margins not updated on viewport changes ([#14089](https://github.com/angular/material2/issues/14089)) ([b15392d](https://github.com/angular/material2/commit/b15392d))
* **snack-bar:** announcing same message twice to screen readers ([#13298](https://github.com/angular/material2/issues/13298)) ([3fb4b23](https://github.com/angular/material2/commit/3fb4b23))
* **stepper:** ignoring custom falsy value for hasError ([#14337](https://github.com/angular/material2/issues/14337)) ([7fac915](https://github.com/angular/material2/commit/7fac915)), closes [#14333](https://github.com/angular/material2/issues/14333)
* **text-field:** add fallback for browsers that don't support requestAnimationFrame ([#14519](https://github.com/angular/material2/issues/14519)) ([c94812d](https://github.com/angular/material2/commit/c94812d))
* **tree:** allow tree node to have undefined child or null child ([#14482](https://github.com/angular/material2/issues/14482)) ([eeda91d](https://github.com/angular/material2/commit/eeda91d))
* **tree:** handle null children in nested tree ([#14547](https://github.com/angular/material2/issues/14547)) ([364376e](https://github.com/angular/material2/commit/364376e)), closes [#10886](https://github.com/angular/material2/issues/10886) [#14545](https://github.com/angular/material2/issues/14545)
* reference symbols for example components rather than providing a string of the component name ([#13992](https://github.com/angular/material2/issues/13992)) ([d0d97c3](https://github.com/angular/material2/commit/d0d97c3))
* workaround for es2015 inheritance not always working ([#13834](https://github.com/angular/material2/issues/13834)) ([a22a9fa](https://github.com/angular/material2/commit/a22a9fa))


### Features

* **drag-drop:** add class to indicate whether a container can receive an item ([#14532](https://github.com/angular/material2/issues/14532)) ([c6dc070](https://github.com/angular/material2/commit/c6dc070)), closes [#14439](https://github.com/angular/material2/issues/14439)
* **drag-drop:** add released event ([#14513](https://github.com/angular/material2/issues/14513)) ([792d536](https://github.com/angular/material2/commit/792d536)), closes [#14498](https://github.com/angular/material2/issues/14498)
* **drag-drop:** add the ability to constrain dragging to an element ([#14242](https://github.com/angular/material2/issues/14242)) ([8432e80](https://github.com/angular/material2/commit/8432e80)), closes [#14211](https://github.com/angular/material2/issues/14211)
* **drag-drop:** allow entire group of drop lists to be disabled ([#14179](https://github.com/angular/material2/issues/14179)) ([94e76de](https://github.com/angular/material2/commit/94e76de))
* **drag-drop:** indicate in dropped event whether item was dropped outside of container ([#14140](https://github.com/angular/material2/issues/14140)) ([42de6a2](https://github.com/angular/material2/commit/42de6a2)), closes [#14136](https://github.com/angular/material2/issues/14136)


## 7.1.1 "fondant-friendship" (2018-12-03)


### Bug Fixes

* **a11y:** don't handle disallowed modifier keys in typeahead mode ([#14301](https://github.com/angular/material2/issues/14301)) ([700f20f](https://github.com/angular/material2/commit/700f20f)), closes [#14274](https://github.com/angular/material2/issues/14274)
* **badge:** badge instances not being cleaned up on destroy ([#14265](https://github.com/angular/material2/issues/14265)) ([da3776f](https://github.com/angular/material2/commit/da3776f))
* **checkbox:** poor color contrast for disabled checkbox ([#14044](https://github.com/angular/material2/issues/14044)) ([9c86b5f](https://github.com/angular/material2/commit/9c86b5f))
* **chips:** invert focus overlay on dark theme ([#14204](https://github.com/angular/material2/issues/14204)) ([7af8d02](https://github.com/angular/material2/commit/7af8d02))
* **drag-drop:** add support for dragging svg elements in IE11 ([#14215](https://github.com/angular/material2/issues/14215)) ([81db16c](https://github.com/angular/material2/commit/81db16c)), closes [#14214](https://github.com/angular/material2/issues/14214)
* **drag-drop:** dragged elements blurry in some browsers ([#14299](https://github.com/angular/material2/issues/14299)) ([63174d2](https://github.com/angular/material2/commit/63174d2)), closes [#14283](https://github.com/angular/material2/issues/14283)
* **drag-drop:** only add top-level drop lists to drop group ([#14130](https://github.com/angular/material2/issues/14130)) ([4acecd7](https://github.com/angular/material2/commit/4acecd7))
* **drag-drop:** remove expensive style recalculation ([#14189](https://github.com/angular/material2/issues/14189)) ([f212345](https://github.com/angular/material2/commit/f212345))
* **form-field:** error when native select has no options ([#14102](https://github.com/angular/material2/issues/14102)) ([0ef75ea](https://github.com/angular/material2/commit/0ef75ea)), closes [#14101](https://github.com/angular/material2/issues/14101)
* **list:** don't handle events when modifier key is pressed ([#14313](https://github.com/angular/material2/issues/14313)) ([0c7ce7a](https://github.com/angular/material2/commit/0c7ce7a))
* **menu:** allow alternate roles to be set on menu item ([#14165](https://github.com/angular/material2/issues/14165)) ([3f1588f](https://github.com/angular/material2/commit/3f1588f)), closes [#14163](https://github.com/angular/material2/issues/14163)
* **ng-add:** do not throw if custom builder is used for "test" ([#14203](https://github.com/angular/material2/issues/14203)) ([498a3d8](https://github.com/angular/material2/commit/498a3d8)), closes [#14176](https://github.com/angular/material2/issues/14176)
* **scrolling:** default to vertical CSS class for invalid orientation ([#14145](https://github.com/angular/material2/issues/14145)) ([dbe27c4](https://github.com/angular/material2/commit/dbe27c4))
* **scrolling:** provide virtual scroll viewport as scrollable ([#14168](https://github.com/angular/material2/issues/14168)) ([c552504](https://github.com/angular/material2/commit/c552504))
* **slide-toggle:** label not being read out by JAWS ([#14304](https://github.com/angular/material2/issues/14304)) ([754414b](https://github.com/angular/material2/commit/754414b)), closes [#4610](https://github.com/angular/material2/issues/4610)
* **slide-toggle:** label not being read out by screen reader on IE ([#14259](https://github.com/angular/material2/issues/14259)) ([5264804](https://github.com/angular/material2/commit/5264804))
* **stepper:** showing hover state after tap on touch devices ([#14074](https://github.com/angular/material2/issues/14074)) ([f3031ad](https://github.com/angular/material2/commit/f3031ad))
* **tabs:** avoid hitting change detection if text content hasn't changed ([#14251](https://github.com/angular/material2/issues/14251)) ([9778af2](https://github.com/angular/material2/commit/9778af2)), closes [#14249](https://github.com/angular/material2/issues/14249)
* **tabs:** blurry text in scrolled header on some browsers ([#14303](https://github.com/angular/material2/issues/14303)) ([f7c8026](https://github.com/angular/material2/commit/f7c8026))


<a name="7.1.0"></a>
# 7.1.0 "stone-silhouette" (2018-11-20)


### Bug Fixes

* **a11y:** aria-live directive announcing the same text multiple times ([#13467](https://github.com/angular/material2/issues/13467)) ([a150494](https://github.com/angular/material2/commit/a150494))
* **a11y:** avoid overlapping or left over timers in live announcer ([#13602](https://github.com/angular/material2/issues/13602)) ([d0f4e7b](https://github.com/angular/material2/commit/d0f4e7b))
* **a11y:** key manager preventing arrow key events with modifier keys ([#13503](https://github.com/angular/material2/issues/13503)) ([1ef16ac](https://github.com/angular/material2/commit/1ef16ac)), closes [#11987](https://github.com/angular/material2/issues/11987) [#13496](https://github.com/angular/material2/issues/13496)
* **a11y:** wrong order of constructor arguments in provider ([#14078](https://github.com/angular/material2/issues/14078)) ([2fcf9e7](https://github.com/angular/material2/commit/2fcf9e7)), closes [#14077](https://github.com/angular/material2/issues/14077)
* **autocomplete:** autofill value changes not being propagated to the form control ([#9887](https://github.com/angular/material2/issues/9887)) ([059864d](https://github.com/angular/material2/commit/059864d)), closes [#9704](https://github.com/angular/material2/issues/9704)
* **autocomplete:** not propagating same model value when reset while open ([#13634](https://github.com/angular/material2/issues/13634)) ([8d98375](https://github.com/angular/material2/commit/8d98375))
* **bazel:** theming bundle not exposed as sass_library ([#14071](https://github.com/angular/material2/issues/14071)) ([af7a3d4](https://github.com/angular/material2/commit/af7a3d4))
* **bidi:** preserve user dir attribute ([#13859](https://github.com/angular/material2/issues/13859)) ([d94d176](https://github.com/angular/material2/commit/d94d176)), closes [#13855](https://github.com/angular/material2/issues/13855)
* **breakpoints:** set max-widths for breakpoints to non-integers to handle subpixel queries ([#13828](https://github.com/angular/material2/issues/13828)) ([077f68e](https://github.com/angular/material2/commit/077f68e))
* **button:** ripple color not correct for standard, icon and stroked buttons ([#13235](https://github.com/angular/material2/issues/13235)) ([b104e75](https://github.com/angular/material2/commit/b104e75)), closes [#13232](https://github.com/angular/material2/issues/13232)
* **button:** stroked button crops applied badges ([#13912](https://github.com/angular/material2/issues/13912)) ([4b431fe](https://github.com/angular/material2/commit/4b431fe)), closes [#13909](https://github.com/angular/material2/issues/13909)
* **button-toggle:** content shifting in IE11 ([#13492](https://github.com/angular/material2/issues/13492)) ([b3483a6](https://github.com/angular/material2/commit/b3483a6))
* **button-toggle:** not forwarding focus to underlying control ([#14001](https://github.com/angular/material2/issues/14001)) ([81f8fb9](https://github.com/angular/material2/commit/81f8fb9))
* **button-toggle:** remove hover state on touch devices ([#13724](https://github.com/angular/material2/issues/13724)) ([a320af2](https://github.com/angular/material2/commit/a320af2))
* **button-toggle:** svg icon not align inside toggle ([#13839](https://github.com/angular/material2/issues/13839)) ([5851c91](https://github.com/angular/material2/commit/5851c91)), closes [#13726](https://github.com/angular/material2/issues/13726)
* **button-toggle:** webkit tap highlight conflicting with ripples ([#13721](https://github.com/angular/material2/issues/13721)) ([efe53a0](https://github.com/angular/material2/commit/efe53a0))
* **cdk-platform:** pass `{}` to `@NgModule` since passing nothing breaks ([#13792](https://github.com/angular/material2/issues/13792)) ([65dd75d](https://github.com/angular/material2/commit/65dd75d))
* **checkbox:** disabled property not being coerced ([#13755](https://github.com/angular/material2/issues/13755)) ([e5fe34c](https://github.com/angular/material2/commit/e5fe34c)), closes [#13739](https://github.com/angular/material2/issues/13739)
* **checkbox:** no focus indicator in high contrast ([#13255](https://github.com/angular/material2/issues/13255)) ([caf65e5](https://github.com/angular/material2/commit/caf65e5)), closes [#13227](https://github.com/angular/material2/issues/13227)
* **chips:** disabled state not matching specs ([#13272](https://github.com/angular/material2/issues/13272)) ([60e0d88](https://github.com/angular/material2/commit/60e0d88))
* **chips:** invalid ripple color for selected chips ([#13271](https://github.com/angular/material2/issues/13271)) ([df5d18f](https://github.com/angular/material2/commit/df5d18f))
* **chips:** not updating keyboard controls if direction changes ([#14080](https://github.com/angular/material2/issues/14080)) ([1ffa1fc](https://github.com/angular/material2/commit/1ffa1fc))
* **chips:** remove circular dependency between chip-list and chip-input ([#13994](https://github.com/angular/material2/issues/13994)) ([6c741c4](https://github.com/angular/material2/commit/6c741c4))
* **datepicker:** don't allow clicks on disabled cells in year and multi-year views ([#13448](https://github.com/angular/material2/issues/13448)) ([c15bad2](https://github.com/angular/material2/commit/c15bad2))
* **datepicker:** toggle not forwarding focus to underlying button ([#14020](https://github.com/angular/material2/issues/14020)) ([b1d4b42](https://github.com/angular/material2/commit/b1d4b42))
* **datepicker:** unable to disable ripple on datepicker toggle ([#13997](https://github.com/angular/material2/issues/13997)) ([31bffb3](https://github.com/angular/material2/commit/31bffb3)), closes [#13986](https://github.com/angular/material2/issues/13986)
* **dialog,bottom-sheet:** enter animation blocking child animations ([#13888](https://github.com/angular/material2/issues/13888)) ([235add9](https://github.com/angular/material2/commit/235add9)), closes [#13870](https://github.com/angular/material2/issues/13870)
* **drag-drop:** avoid disrupting drag sequence if event propagation is stopped ([#13841](https://github.com/angular/material2/issues/13841)) ([8b2dc82](https://github.com/angular/material2/commit/8b2dc82))
* **drag-drop:** avoid generating elements with duplicate ids ([#13489](https://github.com/angular/material2/issues/13489)) ([68b53f7](https://github.com/angular/material2/commit/68b53f7))
* **drag-drop:** avoid interference from native drag&drop ([#14054](https://github.com/angular/material2/issues/14054)) ([26d63ee](https://github.com/angular/material2/commit/26d63ee))
* **drag-drop:** drop list not toggling dragging class inside component with OnPush change detection ([#13703](https://github.com/angular/material2/issues/13703)) ([12c15ba](https://github.com/angular/material2/commit/12c15ba)), closes [#13680](https://github.com/angular/material2/issues/13680)
* **drag-drop:** enable drag interactions when there is a drag handle ([#13780](https://github.com/angular/material2/issues/13780)) ([4ee6636](https://github.com/angular/material2/commit/4ee6636)), closes [#13779](https://github.com/angular/material2/issues/13779)
* **drag-drop:** error if drag item is destroyed zone has stabilized ([#13978](https://github.com/angular/material2/issues/13978)) ([6fe84f3](https://github.com/angular/material2/commit/6fe84f3))
* **drag-drop:** events fired multiple times for short drag sequences on touch devices ([#13135](https://github.com/angular/material2/issues/13135)) ([dc0b51a](https://github.com/angular/material2/commit/dc0b51a)), closes [#13125](https://github.com/angular/material2/issues/13125)
* **drag-drop:** ignore enter predicate when returning item to its initial container ([#13972](https://github.com/angular/material2/issues/13972)) ([fa944b7](https://github.com/angular/material2/commit/fa944b7))
* **drag-drop:** incorrectly laying out items with different height or margins ([#13849](https://github.com/angular/material2/issues/13849)) ([89701ef](https://github.com/angular/material2/commit/89701ef)), closes [#13483](https://github.com/angular/material2/issues/13483)
* **drag-drop:** multiple parallel drag sequences when dragging nested drag items ([#13820](https://github.com/angular/material2/issues/13820)) ([436809c](https://github.com/angular/material2/commit/436809c))
* **drag-drop:** not picking up handle that isn't a direct descendant ([#13360](https://github.com/angular/material2/issues/13360)) ([c38ebb6](https://github.com/angular/material2/commit/c38ebb6))
* **drag-drop:** preserve previous inline transform ([#13529](https://github.com/angular/material2/issues/13529)) ([cae16b0](https://github.com/angular/material2/commit/cae16b0))
* **drag-drop:** prevent mouse wheel scrolling while dragging ([#13524](https://github.com/angular/material2/issues/13524)) ([cd6da93](https://github.com/angular/material2/commit/cd6da93)), closes [#13508](https://github.com/angular/material2/issues/13508)
* **drag-drop:** use passive event listeners for start events ([#13526](https://github.com/angular/material2/issues/13526)) ([280b0d6](https://github.com/angular/material2/commit/280b0d6))
* **expansion-panel:** don't handle enter/space if modifier is pressed ([#13790](https://github.com/angular/material2/issues/13790)) ([04716b1](https://github.com/angular/material2/commit/04716b1)), closes [#13783](https://github.com/angular/material2/issues/13783)
* **expansion-panel:** emitting events twice on some browsers ([#13600](https://github.com/angular/material2/issues/13600)) ([fa6e46d](https://github.com/angular/material2/commit/fa6e46d))
* **focus-trap:** warn if initial element is not focusable ([#13960](https://github.com/angular/material2/issues/13960)) ([27347b5](https://github.com/angular/material2/commit/27347b5)), closes [#13953](https://github.com/angular/material2/issues/13953)
* **form-field:** native select options blending in with dropdown background on a dark theme ([#13201](https://github.com/angular/material2/issues/13201)) ([3f1e960](https://github.com/angular/material2/commit/3f1e960))
* **form-field:** users being able to select the hidden placeholder of disabled input ([#13480](https://github.com/angular/material2/issues/13480)) ([8dc367c](https://github.com/angular/material2/commit/8dc367c)), closes [#13479](https://github.com/angular/material2/issues/13479)
* **grid-list:** unable to assign numeric zero as gutter size ([#13652](https://github.com/angular/material2/issues/13652)) ([037a746](https://github.com/angular/material2/commit/037a746))
* **icon:** account for query params when prefixing external references ([#13930](https://github.com/angular/material2/issues/13930)) ([4ce5ee0](https://github.com/angular/material2/commit/4ce5ee0)), closes [#13924](https://github.com/angular/material2/issues/13924)
* **list:** add ripples to action list items ([#13799](https://github.com/angular/material2/issues/13799)) ([76044e8](https://github.com/angular/material2/commit/76044e8)), closes [#13795](https://github.com/angular/material2/issues/13795)
* **list:** remove disabled selection list hover feedback on mobile ([#13850](https://github.com/angular/material2/issues/13850)) ([0589881](https://github.com/angular/material2/commit/0589881))
* **list:** selection list moving focus when an option is destroyed ([#13531](https://github.com/angular/material2/issues/13531)) ([b5a0b16](https://github.com/angular/material2/commit/b5a0b16))
* **menu:** closing parent overlay when pressing escape ([#13442](https://github.com/angular/material2/issues/13442)) ([a7df1d0](https://github.com/angular/material2/commit/a7df1d0))
* **menu:** proper focus styling when opened by tap on a touch device ([#13599](https://github.com/angular/material2/issues/13599)) ([e51de15](https://github.com/angular/material2/commit/e51de15))
* **menu:** unable to swap menu panel after first open ([#13819](https://github.com/angular/material2/issues/13819)) ([1fb1c55](https://github.com/angular/material2/commit/1fb1c55)), closes [#13812](https://github.com/angular/material2/issues/13812)
* **menu:** use passive touch listener ([#14041](https://github.com/angular/material2/issues/14041)) ([3842c8c](https://github.com/angular/material2/commit/3842c8c))
* **ng-update:** do not fail if [@schematics](https://github.com/schematics)/angular version is outdated ([#13929](https://github.com/angular/material2/issues/13929)) ([ece6b2d](https://github.com/angular/material2/commit/ece6b2d))
* **ng-update:** do not throw if typescript version is outdated ([#13927](https://github.com/angular/material2/issues/13927)) ([eb59e56](https://github.com/angular/material2/commit/eb59e56))
* **overlay:** backdrop exit animation not working ([#10145](https://github.com/angular/material2/issues/10145)) ([3816079](https://github.com/angular/material2/commit/3816079))
* **overlay:** provide fullscreen overlay container in root ([#14091](https://github.com/angular/material2/issues/14091)) ([c55b78e](https://github.com/angular/material2/commit/c55b78e))
* **portal:** use portal's ComponentFactoryResolver in portal outlet directive ([#13886](https://github.com/angular/material2/issues/13886)) ([99d2512](https://github.com/angular/material2/commit/99d2512)), closes [#12677](https://github.com/angular/material2/issues/12677) [#9712](https://github.com/angular/material2/issues/9712)
* **progress-bar:** account for query params when prefixing references ([#13942](https://github.com/angular/material2/issues/13942)) ([2290063](https://github.com/angular/material2/commit/2290063)), closes [#13930](https://github.com/angular/material2/issues/13930)
* **progress-bar:** not taking current path after first initialization ([#13628](https://github.com/angular/material2/issues/13628)) ([88c6548](https://github.com/angular/material2/commit/88c6548))
* **radio:** don't show hover ripples on touch devices ([#13701](https://github.com/angular/material2/issues/13701)) ([f230633](https://github.com/angular/material2/commit/f230633)), closes [#13675](https://github.com/angular/material2/issues/13675)
* **radio:** improved alignment for native validation messages ([#13570](https://github.com/angular/material2/issues/13570)) ([dd96369](https://github.com/angular/material2/commit/dd96369))
* **scrolling:** leaking subscription if same element is registered multiple times ([#13974](https://github.com/angular/material2/issues/13974)) ([20f8924](https://github.com/angular/material2/commit/20f8924))
* **select:** don't prevent enter and space keys if a modifier is pressed ([#14090](https://github.com/angular/material2/issues/14090)) ([cb56df9](https://github.com/angular/material2/commit/cb56df9))
* **sidenav:** opened and closed events emitting twice on IE and Edge ([#13649](https://github.com/angular/material2/issues/13649)) ([beb4739](https://github.com/angular/material2/commit/beb4739))
* **slide-toggle:** don't show hover ripples on touch devices ([#13702](https://github.com/angular/material2/issues/13702)) ([e8f8d07](https://github.com/angular/material2/commit/e8f8d07)), closes [#13675](https://github.com/angular/material2/issues/13675)
* **slide-toggle:** no focus indication in high-contrast mode ([#13287](https://github.com/angular/material2/issues/13287)) ([264f306](https://github.com/angular/material2/commit/264f306))
* **slide-toggle:** redirect focus to underlying input element ([#13957](https://github.com/angular/material2/issues/13957)) ([ec4809f](https://github.com/angular/material2/commit/ec4809f)), closes [#13953](https://github.com/angular/material2/issues/13953)
* **slide-toggle:** showing focus ripple when clicking disabled control ([#14055](https://github.com/angular/material2/issues/14055)) ([9b05c3c](https://github.com/angular/material2/commit/9b05c3c)), closes [#13957](https://github.com/angular/material2/issues/13957)
* **slide-toggle:** using incorrect colors when disabled ([#13444](https://github.com/angular/material2/issues/13444)) ([dd9f267](https://github.com/angular/material2/commit/dd9f267))
* **slider:** changing value on right click ([#14083](https://github.com/angular/material2/issues/14083)) ([ed857c9](https://github.com/angular/material2/commit/ed857c9))
* **slider:** update value on mousedown instead of click ([#13020](https://github.com/angular/material2/issues/13020)) ([861642c](https://github.com/angular/material2/commit/861642c))
* **snack-bar:** set appropriate role based on passed in politeness ([#13864](https://github.com/angular/material2/issues/13864)) ([50f999b](https://github.com/angular/material2/commit/50f999b)), closes [#13493](https://github.com/angular/material2/issues/13493)
* **snackbar:** override min-width of snackbar on mobile ([#13880](https://github.com/angular/material2/issues/13880)) ([6703605](https://github.com/angular/material2/commit/6703605))
* **snackbar:** set aria role based on if announcement message is provided ([#13993](https://github.com/angular/material2/issues/13993)) ([69ffd33](https://github.com/angular/material2/commit/69ffd33))
* **stepper:** custom icons not centered inside circle ([#12947](https://github.com/angular/material2/issues/12947)) ([87e1742](https://github.com/angular/material2/commit/87e1742))
* **stepper:** don't handle enter/space when modifier key is pressed ([#13827](https://github.com/angular/material2/issues/13827)) ([a9e550e](https://github.com/angular/material2/commit/a9e550e)), closes [#13790](https://github.com/angular/material2/issues/13790)
* **stepper:** emitting the animationDone event twice on some browsers ([#13608](https://github.com/angular/material2/issues/13608)) ([3ef933a](https://github.com/angular/material2/commit/3ef933a)), closes [#13600](https://github.com/angular/material2/issues/13600) [#13587](https://github.com/angular/material2/issues/13587)
* **stepper:** fix text contrast ratio of stepper labels ([#14012](https://github.com/angular/material2/issues/14012)) ([ae5b10f](https://github.com/angular/material2/commit/ae5b10f))
* **stepper:** incorrect border color in dark theme for header with label position ([#13791](https://github.com/angular/material2/issues/13791)) ([bbeb5ef](https://github.com/angular/material2/commit/bbeb5ef))
* **stepper:** intl provider not being picked up in lazy-loaded modules ([#12934](https://github.com/angular/material2/issues/12934)) ([675aa66](https://github.com/angular/material2/commit/675aa66))
* **stepper:** selector assuming that there will always be a dir attribute ([#13751](https://github.com/angular/material2/issues/13751)) ([d5f0f0f](https://github.com/angular/material2/commit/d5f0f0f)), closes [#13741](https://github.com/angular/material2/issues/13741)
* **stroked-button:** ripples and focus overlay have incorrect radius ([#13745](https://github.com/angular/material2/issues/13745)) ([4cdf5ba](https://github.com/angular/material2/commit/4cdf5ba)), closes [#13738](https://github.com/angular/material2/issues/13738)
* **table:** delimit words when filtering ([#13487](https://github.com/angular/material2/issues/13487)) ([2a3599e](https://github.com/angular/material2/commit/2a3599e))
* **tabs:** duplicate animation events on some browsers ([#13674](https://github.com/angular/material2/issues/13674)) ([28e3d36](https://github.com/angular/material2/commit/28e3d36))
* **tabs:** mat-align-tabs not working on mat-tab-nav-bar ([#13818](https://github.com/angular/material2/issues/13818)) ([8fad5d1](https://github.com/angular/material2/commit/8fad5d1)), closes [#13798](https://github.com/angular/material2/issues/13798)
* **tabs:** paginated header offset incorrect on IE ([#13223](https://github.com/angular/material2/issues/13223)) ([d7a8892](https://github.com/angular/material2/commit/d7a8892)), closes [#13217](https://github.com/angular/material2/issues/13217)
* **text-field:** autosize textarea not resizing on minRows decrease ([#13437](https://github.com/angular/material2/issues/13437)) ([cfeab79](https://github.com/angular/material2/commit/cfeab79))
* **tooltip:** add fallback for touch devices if Hammer isn't loaded ([#13580](https://github.com/angular/material2/issues/13580)) ([5d54920](https://github.com/angular/material2/commit/5d54920)), closes [#13536](https://github.com/angular/material2/issues/13536)
* **virtual-scroll:** not removing view from container if it's outside the template cache ([#13916](https://github.com/angular/material2/issues/13916)) ([8922100](https://github.com/angular/material2/commit/8922100)), closes [#13901](https://github.com/angular/material2/issues/13901)

### Features

* **bottom-sheet:** allow focus restoration to be disabled ([#13153](https://github.com/angular/material2/issues/13153)) ([83fc823](https://github.com/angular/material2/commit/83fc823)), closes [#13150](https://github.com/angular/material2/issues/13150)
* **datepicker:** allow custom classes to be applied to individual dates ([#13971](https://github.com/angular/material2/issues/13971)) ([4be1b06](https://github.com/angular/material2/commit/4be1b06)), closes [#13943](https://github.com/angular/material2/issues/13943)
* **drag-drop:** add directive to connect drop lists automatically ([#13754](https://github.com/angular/material2/issues/13754)) ([962dbeb](https://github.com/angular/material2/commit/962dbeb)), closes [#13750](https://github.com/angular/material2/issues/13750)
* **drag-drop:** add the ability to disable dragging ([#13722](https://github.com/angular/material2/issues/13722)) ([b02a72e](https://github.com/angular/material2/commit/b02a72e)), closes [#13651](https://github.com/angular/material2/issues/13651)
* **drag-utils:** add utility function for cloning array items from one array to another ([#13743](https://github.com/angular/material2/issues/13743)) ([d2d8a1f](https://github.com/angular/material2/commit/d2d8a1f)), closes [#13100](https://github.com/angular/material2/issues/13100)
* **keycodes:** add utilities for checking modifier keys ([#13933](https://github.com/angular/material2/issues/13933)) ([7899863](https://github.com/angular/material2/commit/7899863)), closes [#13790](https://github.com/angular/material2/issues/13790)
* **live-announcer:** add ability to clear live element ([#11996](https://github.com/angular/material2/issues/11996)) ([4a1c8ed](https://github.com/angular/material2/commit/4a1c8ed)), closes [#11991](https://github.com/angular/material2/issues/11991)
* **ng-add:** add preview URLs for theme choices ([#13723](https://github.com/angular/material2/issues/13723)) ([4fbbb9d](https://github.com/angular/material2/commit/4fbbb9d)), closes [/github.com/angular/angular-cli/blob/907ce5c94c774147c4b52870b3522aed4e087c76/packages/schematics/angular/ng-new/schema.json#L121](https://github.com//github.com/angular/angular-cli/blob/907ce5c94c774147c4b52870b3522aed4e087c76/packages/schematics/angular/ng-new/schema.json/issues/L121) [#13708](https://github.com/angular/material2/issues/13708)
* **paginator:** allow paginator to be disabled ([#13146](https://github.com/angular/material2/issues/13146)) ([cb4f5a0](https://github.com/angular/material2/commit/cb4f5a0)), closes [#13145](https://github.com/angular/material2/issues/13145)
* **stepper:** add CdkStepHeader directive and fix CdkStepper error on init ([#10614](https://github.com/angular/material2/issues/10614)) ([fbbe463](https://github.com/angular/material2/commit/fbbe463)), closes [#10611](https://github.com/angular/material2/issues/10611)
* **tabs:** add the ability to customize the animation duration ([#13505](https://github.com/angular/material2/issues/13505)) ([0cd7536](https://github.com/angular/material2/commit/0cd7536)), closes [#13428](https://github.com/angular/material2/issues/13428)
* **tabs:** make the updatePagination method public ([#13935](https://github.com/angular/material2/issues/13935)) ([1e4ee0c](https://github.com/angular/material2/commit/1e4ee0c))


### Performance Improvements

* **focus-monitor:** mark event listeners as passive ([#13532](https://github.com/angular/material2/issues/13532)) ([bfc00a0](https://github.com/angular/material2/commit/bfc00a0))
* **list:** reduce css selector size ([#12571](https://github.com/angular/material2/issues/12571)) ([e31e011](https://github.com/angular/material2/commit/e31e011))



<a name="7.0.4"></a>
## 7.0.4 "brick-dress" (2018-11-13)


### Bug Fixes

* **a11y:** aria-live directive announcing the same text multiple times ([#13467](https://github.com/angular/material2/issues/13467)) ([7c2a095](https://github.com/angular/material2/commit/7c2a095))
* **a11y:** avoid overlapping or left over timers in live announcer ([#13602](https://github.com/angular/material2/issues/13602)) ([a93d3a5](https://github.com/angular/material2/commit/a93d3a5))
* **a11y:** key manager preventing arrow key events with modifier keys ([#13503](https://github.com/angular/material2/issues/13503)) ([b7ef6af](https://github.com/angular/material2/commit/b7ef6af)), closes [#11987](https://github.com/angular/material2/issues/11987) [#13496](https://github.com/angular/material2/issues/13496)
* **bazel:** theming bundle not exposed as sass_library ([#14071](https://github.com/angular/material2/issues/14071)) ([71c205e](https://github.com/angular/material2/commit/71c205e))
* **bidi:** preserve user dir attribute ([#13859](https://github.com/angular/material2/issues/13859)) ([86089fe](https://github.com/angular/material2/commit/86089fe)), closes [#13855](https://github.com/angular/material2/issues/13855)
* **button:** ripple color not correct for standard, icon and stroked buttons ([#13235](https://github.com/angular/material2/issues/13235)) ([62c6d55](https://github.com/angular/material2/commit/62c6d55)), closes [#13232](https://github.com/angular/material2/issues/13232)
* **button-toggle:** not forwarding focus to underlying control ([#14001](https://github.com/angular/material2/issues/14001)) ([b7be573](https://github.com/angular/material2/commit/b7be573))
* **button-toggle:** svg icon not align inside toggle ([#13839](https://github.com/angular/material2/issues/13839)) ([2814a99](https://github.com/angular/material2/commit/2814a99)), closes [#13726](https://github.com/angular/material2/issues/13726)
* **checkbox:** no focus indicator in high contrast ([#13255](https://github.com/angular/material2/issues/13255)) ([13d9d3a](https://github.com/angular/material2/commit/13d9d3a)), closes [#13227](https://github.com/angular/material2/issues/13227)
* **chips:** invalid ripple color for selected chips ([#13271](https://github.com/angular/material2/issues/13271)) ([057eee1](https://github.com/angular/material2/commit/057eee1))
* **datepicker:** toggle not forwarding focus to underlying button ([#14020](https://github.com/angular/material2/issues/14020)) ([723d7f5](https://github.com/angular/material2/commit/723d7f5))
* **datepicker:** unable to disable ripple on datepicker toggle ([#13997](https://github.com/angular/material2/issues/13997)) ([2fb58ab](https://github.com/angular/material2/commit/2fb58ab)), closes [#13986](https://github.com/angular/material2/issues/13986)
* **drag-drop:** avoid disrupting drag sequence if event propagation is stopped ([#13841](https://github.com/angular/material2/issues/13841)) ([2902d0b](https://github.com/angular/material2/commit/2902d0b))
* **drag-drop:** avoid generating elements with duplicate ids ([#13489](https://github.com/angular/material2/issues/13489)) ([905f0b4](https://github.com/angular/material2/commit/905f0b4))
* **drag-drop:** avoid interference from native drag&drop ([#14054](https://github.com/angular/material2/issues/14054)) ([8dcbee2](https://github.com/angular/material2/commit/8dcbee2))
* **drag-drop:** enable drag interactions when there is a drag handle ([#13780](https://github.com/angular/material2/issues/13780)) ([0d3b74a](https://github.com/angular/material2/commit/0d3b74a)), closes [#13779](https://github.com/angular/material2/issues/13779)
* **drag-drop:** error if drag item is destroyed zone has stabilized ([#13978](https://github.com/angular/material2/issues/13978)) ([40a63cf](https://github.com/angular/material2/commit/40a63cf))
* **drag-drop:** ignore enter predicate when returning item to its initial container ([#13972](https://github.com/angular/material2/issues/13972)) ([3fb5522](https://github.com/angular/material2/commit/3fb5522))
* **drag-drop:** prevent mouse wheel scrolling while dragging ([#13524](https://github.com/angular/material2/issues/13524)) ([718d306](https://github.com/angular/material2/commit/718d306)), closes [#13508](https://github.com/angular/material2/issues/13508)
* **drag-drop:** add directive to connect drop lists automatically ([#13754](https://github.com/angular/material2/issues/13754)) ([e905127](https://github.com/angular/material2/commit/e905127)), closes [#13750](https://github.com/angular/material2/issues/13750)
* **focus-trap:** warn if initial element is not focusable ([#13960](https://github.com/angular/material2/issues/13960)) ([3026138](https://github.com/angular/material2/commit/3026138)), closes [#13953](https://github.com/angular/material2/issues/13953)
* **icon:** account for query params when prefixing external references ([#13930](https://github.com/angular/material2/issues/13930)) ([90420d6](https://github.com/angular/material2/commit/90420d6)), closes [#13924](https://github.com/angular/material2/issues/13924)
* **menu:** use passive touch listener ([#14041](https://github.com/angular/material2/issues/14041)) ([f5006d6](https://github.com/angular/material2/commit/f5006d6))
* **progress-bar:** account for query params when prefixing references ([#13942](https://github.com/angular/material2/issues/13942)) ([eb82847](https://github.com/angular/material2/commit/eb82847)), closes [#13930](https://github.com/angular/material2/issues/13930)
* **scrolling:** leaking subscription if same element is registered multiple times ([#13974](https://github.com/angular/material2/issues/13974)) ([1a7173d](https://github.com/angular/material2/commit/1a7173d))
* **slide-toggle:** redirect focus to underlying input element ([#13957](https://github.com/angular/material2/issues/13957)) ([1d4be69](https://github.com/angular/material2/commit/1d4be69)), closes [#13953](https://github.com/angular/material2/issues/13953)
* **slide-toggle:** showing focus ripple when clicking disabled control ([#14055](https://github.com/angular/material2/issues/14055)) ([a2c2caf](https://github.com/angular/material2/commit/a2c2caf)), closes [#13957](https://github.com/angular/material2/issues/13957)
* **snackbar:** set aria role based on if announcement message is provided ([#13993](https://github.com/angular/material2/issues/13993)) ([199583b](https://github.com/angular/material2/commit/199583b))
* **stepper:** fix text contrast ratio of stepper labels ([#14012](https://github.com/angular/material2/issues/14012)) ([01605d0](https://github.com/angular/material2/commit/01605d0))



<a name="7.0.3"></a>
## 7.0.3 "lyrium-longboard" (2018-11-06)


### Bug Fixes

* **breakpoints:** set max-widths for breakpoints to non-integers to handle subpixel queries ([#13828](https://github.com/angular/material2/issues/13828)) ([b88b79d](https://github.com/angular/material2/commit/b88b79d))
* **button:** stroked button crops applied badges ([#13912](https://github.com/angular/material2/issues/13912)) ([835dc9e](https://github.com/angular/material2/commit/835dc9e)), closes [#13909](https://github.com/angular/material2/issues/13909)
* **button-toggle:** remove hover state on touch devices ([#13724](https://github.com/angular/material2/issues/13724)) ([f9d5fb4](https://github.com/angular/material2/commit/f9d5fb4))
* **chips:** remove circular dependency between chip-list and chip-input ([#13994](https://github.com/angular/material2/issues/13994)) ([3da858d](https://github.com/angular/material2/commit/3da858d))
* **dialog,bottom-sheet:** enter animation blocking child animations ([#13888](https://github.com/angular/material2/issues/13888)) ([e5afa48](https://github.com/angular/material2/commit/e5afa48)), closes [#13870](https://github.com/angular/material2/issues/13870)
* **drag-drop:** drop list not toggling dragging class inside component with OnPush change detection ([#13703](https://github.com/angular/material2/issues/13703)) ([4e50d4a](https://github.com/angular/material2/commit/4e50d4a)), closes [#13680](https://github.com/angular/material2/issues/13680)
* **drag-drop:** incorrectly laying out items with different height or margins ([#13849](https://github.com/angular/material2/issues/13849)) ([c509591](https://github.com/angular/material2/commit/c509591)), closes [#13483](https://github.com/angular/material2/issues/13483)
* **drag-drop:** multiple parallel drag sequences when dragging nested drag items ([#13820](https://github.com/angular/material2/issues/13820)) ([cdc0c8b](https://github.com/angular/material2/commit/cdc0c8b))
* **list:** add ripples to action list items ([#13799](https://github.com/angular/material2/issues/13799)) ([b293655](https://github.com/angular/material2/commit/b293655)), closes [#13795](https://github.com/angular/material2/issues/13795)
* **list:** remove disabled selection list hover feedback on mobile ([#13850](https://github.com/angular/material2/issues/13850)) ([e975223](https://github.com/angular/material2/commit/e975223))
* **menu:** unable to swap menu panel after first open ([#13819](https://github.com/angular/material2/issues/13819)) ([cbb76ec](https://github.com/angular/material2/commit/cbb76ec)), closes [#13812](https://github.com/angular/material2/issues/13812)
* **ng-update:** do not fail if [@schematics](https://github.com/schematics)/angular version is outdated ([#13929](https://github.com/angular/material2/issues/13929)) ([f10f8b9](https://github.com/angular/material2/commit/f10f8b9))
* **ng-update:** do not throw if typescript version is outdated ([#13927](https://github.com/angular/material2/issues/13927)) ([d44fcf8](https://github.com/angular/material2/commit/d44fcf8))
* **portal:** use portal's ComponentFactoryResolver in portal outlet directive ([#13886](https://github.com/angular/material2/issues/13886)) ([d2af80b](https://github.com/angular/material2/commit/d2af80b)), closes [#12677](https://github.com/angular/material2/issues/12677) [#9712](https://github.com/angular/material2/issues/9712)
* **snack-bar:** set appropriate role based on passed in politeness ([#13864](https://github.com/angular/material2/issues/13864)) ([33d3cb3](https://github.com/angular/material2/commit/33d3cb3)), closes [#13493](https://github.com/angular/material2/issues/13493)
* **snackbar:** override min-width of snackbar on mobile ([#13880](https://github.com/angular/material2/issues/13880)) ([41cb8aa](https://github.com/angular/material2/commit/41cb8aa))
* **stepper:** don't handle enter/space when modifier key is pressed ([#13827](https://github.com/angular/material2/issues/13827)) ([0bd3890](https://github.com/angular/material2/commit/0bd3890)), closes [#13790](https://github.com/angular/material2/issues/13790)
* **tabs:** duplicate animation events on some browsers ([#13674](https://github.com/angular/material2/issues/13674)) ([7106681](https://github.com/angular/material2/commit/7106681))
* **tabs:** mat-align-tabs not working on mat-tab-nav-bar ([#13818](https://github.com/angular/material2/issues/13818)) ([2289e43](https://github.com/angular/material2/commit/2289e43)), closes [#13798](https://github.com/angular/material2/issues/13798)
* **virtual-scroll:** not removing view from container if it's outside the template cache ([#13916](https://github.com/angular/material2/issues/13916)) ([7c202ec](https://github.com/angular/material2/commit/7c202ec)), closes [#13901](https://github.com/angular/material2/issues/13901)
* bazel support for downstream apps ([#13836](https://github.com/angular/material2/issues/13836)) ([61dbd26](https://github.com/angular/material2/commit/61dbd26))



<a name="7.0.2"></a>
## 7.0.2 limestone-linguine (2018-10-26)


### Bug Fixes

* **build:** material not working with ES2015 ([#13709](https://github.com/angular/material2/issues/13709)) ([e9103a6](https://github.com/angular/material2/commit/e9103a6)), closes [#12760](https://github.com/angular/material2/issues/12760) [#13695](https://github.com/angular/material2/issues/13695)
* **button-toggle:** webkit tap highlight conflicting with ripples ([#13721](https://github.com/angular/material2/issues/13721)) ([abd0278](https://github.com/angular/material2/commit/abd0278))
* **cdk-platform:** pass `{}` to `@NgModule` since passing nothing breaks ([#13792](https://github.com/angular/material2/issues/13792)) ([5abb644](https://github.com/angular/material2/commit/5abb644))
* **checkbox:** disabled property not being coerced ([#13755](https://github.com/angular/material2/issues/13755)) ([cee8c65](https://github.com/angular/material2/commit/cee8c65)), closes [#13739](https://github.com/angular/material2/issues/13739)
* **expansion-panel:** don't handle enter/space if modifier is pressed ([#13790](https://github.com/angular/material2/issues/13790)) ([3e6cc77](https://github.com/angular/material2/commit/3e6cc77)), closes [#13783](https://github.com/angular/material2/issues/13783)
* **radio:** don't show hover ripples on touch devices ([#13701](https://github.com/angular/material2/issues/13701)) ([b89c139](https://github.com/angular/material2/commit/b89c139)), closes [#13675](https://github.com/angular/material2/issues/13675)
* **slide-toggle:** don't show hover ripples on touch devices ([#13702](https://github.com/angular/material2/issues/13702)) ([9d495f1](https://github.com/angular/material2/commit/9d495f1)), closes [#13675](https://github.com/angular/material2/issues/13675)
* **stepper:** incorrect border color in dark theme for header with label position ([#13791](https://github.com/angular/material2/issues/13791)) ([afa5a28](https://github.com/angular/material2/commit/afa5a28))
* **stepper:** selector assuming that there will always be a dir attribute ([#13751](https://github.com/angular/material2/issues/13751)) ([576118e](https://github.com/angular/material2/commit/576118e)), closes [#13741](https://github.com/angular/material2/issues/13741)
* **stroked-button:** ripples and focus overlay have incorrect radius ([#13745](https://github.com/angular/material2/issues/13745)) ([7877404](https://github.com/angular/material2/commit/7877404)), closes [#13738](https://github.com/angular/material2/issues/13738)
* **tooltip:** add fallback for touch devices if Hammer isn't loaded ([#13580](https://github.com/angular/material2/issues/13580)) ([9ae6c84](https://github.com/angular/material2/commit/9ae6c84)), closes [#13536](https://github.com/angular/material2/issues/13536)


### Features

* **drag-utils:** add utility function for cloning array items from one array to another ([#13743](https://github.com/angular/material2/issues/13743)) ([13395c5](https://github.com/angular/material2/commit/13395c5)), closes [#13100](https://github.com/angular/material2/issues/13100)
* **ng-add:** add preview URLs for theme choices ([#13723](https://github.com/angular/material2/issues/13723)) ([f1d1fc5](https://github.com/angular/material2/commit/f1d1fc5)), closes [/github.com/angular/angular-cli/blob/907ce5c94c774147c4b52870b3522aed4e087c76/packages/schematics/angular/ng-new/schema.json#L121](https://github.com//github.com/angular/angular-cli/blob/907ce5c94c774147c4b52870b3522aed4e087c76/packages/schematics/angular/ng-new/schema.json/issues/L121) [#13708](https://github.com/angular/material2/issues/13708)



<a name="7.0.1"></a>
## 7.0.1 emerald-egret (2018-10-22)


### Bug Fixes

* **autocomplete:** not propagating same model value when reset while open ([#13634](https://github.com/angular/material2/issues/13634)) ([2006144](https://github.com/angular/material2/commit/2006144))
* **button-toggle:** content shifting in IE11 ([#13492](https://github.com/angular/material2/issues/13492)) ([7f5cbe3](https://github.com/angular/material2/commit/7f5cbe3))
* **datepicker:** don't allow clicks on disabled cells in year and multi-year views ([#13448](https://github.com/angular/material2/issues/13448)) ([85741e0](https://github.com/angular/material2/commit/85741e0))
* **drag-drop:** not picking up handle that isn't a direct descendant ([#13360](https://github.com/angular/material2/issues/13360)) ([0f05d99](https://github.com/angular/material2/commit/0f05d99))
* **drag-drop:** preserve previous inline transform ([#13529](https://github.com/angular/material2/issues/13529)) ([2a8da45](https://github.com/angular/material2/commit/2a8da45))
* **drag-drop:** use passive event listeners for start events ([#13526](https://github.com/angular/material2/issues/13526)) ([5d5fba5](https://github.com/angular/material2/commit/5d5fba5))
* **expansion-panel:** emitting events twice on some browsers ([#13600](https://github.com/angular/material2/issues/13600)) ([85a3ae0](https://github.com/angular/material2/commit/85a3ae0))
* **form-field:** native select options blending in with dropdown background on a dark theme ([#13201](https://github.com/angular/material2/issues/13201)) ([b8a6294](https://github.com/angular/material2/commit/b8a6294))
* **grid-list:** unable to assign numeric zero as gutter size ([#13652](https://github.com/angular/material2/issues/13652)) ([4ffcf74](https://github.com/angular/material2/commit/4ffcf74))
* **list:** selection list moving focus when an option is destroyed ([#13531](https://github.com/angular/material2/issues/13531)) ([2c4c5ba](https://github.com/angular/material2/commit/2c4c5ba))
* **menu:** closing parent overlay when pressing escape ([#13442](https://github.com/angular/material2/issues/13442)) ([c3ae922](https://github.com/angular/material2/commit/c3ae922))
* **menu:** proper focus styling when opened by tap on a touch device ([#13599](https://github.com/angular/material2/issues/13599)) ([c271167](https://github.com/angular/material2/commit/c271167))
* **progress-bar:** not taking current path after first initialization ([#13628](https://github.com/angular/material2/issues/13628)) ([8e331a7](https://github.com/angular/material2/commit/8e331a7))
* **radio:** improved alignment for native validation messages ([#13570](https://github.com/angular/material2/issues/13570)) ([dbf5164](https://github.com/angular/material2/commit/dbf5164))
* **sidenav:** opened and closed events emitting twice on IE and Edge ([#13649](https://github.com/angular/material2/issues/13649)) ([5295e2f](https://github.com/angular/material2/commit/5295e2f))
* **slider:** update value on mousedown instead of click ([#13020](https://github.com/angular/material2/issues/13020)) ([c995db7](https://github.com/angular/material2/commit/c995db7))
* **stepper:** custom icons not centered inside circle ([#12947](https://github.com/angular/material2/issues/12947)) ([45edf64](https://github.com/angular/material2/commit/45edf64))
* **stepper:** emitting the animationDone event twice on some browsers ([#13608](https://github.com/angular/material2/issues/13608)) ([a11ca21](https://github.com/angular/material2/commit/a11ca21)), closes [#13600](https://github.com/angular/material2/issues/13600) [#13587](https://github.com/angular/material2/issues/13587)
* **stepper:** intl provider not being picked up in lazy-loaded modules ([#12934](https://github.com/angular/material2/issues/12934)) ([00ce69b](https://github.com/angular/material2/commit/00ce69b))
* **table:** delimit words when filtering ([#13487](https://github.com/angular/material2/issues/13487)) ([1d87b4c](https://github.com/angular/material2/commit/1d87b4c))
* **text-field:** autosize textarea not resizing on minRows decrease ([#13437](https://github.com/angular/material2/issues/13437)) ([8bae5b4](https://github.com/angular/material2/commit/8bae5b4))


### Performance Improvements

* **focus-monitor:** mark event listeners as passive ([#13532](https://github.com/angular/material2/issues/13532)) ([ba0c820](https://github.com/angular/material2/commit/ba0c820))



<a name="7.0.0"></a>
# 7.0.0 amethyst-ammonite (2018-10-17)

### Highlights

* Support for [Drag and Drop](https://material.angular.io/cdk/drag-drop/overview) in `@angular/cdk/drag-drop`.
* Support for [Virtual Scrolling](https://material.angular.io/cdk/scrolling/overview) in `@angular/cdk/scrolling`.
* Support for native `<select>` element in `<mat-form-field>` .
* Added `<mat-action-list>`, a list where each item is a `<button>`.
* Updated component styles throughout the library matching the 2018 Material Design Spec refresh.
* Added more schematics, with schematics now available for table, drag and drop, tree, address form and more.
* Added CLI prompts when using `ng add` to assist in setting up HammerJS support, application theming and animations.
* 250+ bug/performance fixes


### Upgrading to 7.0

Using the Angular CLI, you can use the `ng update` command to automatically migrate to the new APIs in for Material and CDK.
```
ng update @angular/material
```

**NOTE:** If you are **using only the CDK** you can automatically migrate using `ng update @angular/cdk` instead.


### Breaking Changes

* **ripple:** deprecated `[matRippleSpeedFactor]` and `baseSpeedFactor` for the ripples have been removed. Use the new animation config instead.
* **overlay:** The `flexibleDiemsions` property on `CdkConnectedOverlay` has been renamed to `flexibleDimensions`
* **sidenav:** the constructor signature of the `MatDrawerContent` and `MatSidenavContent` has changed.
* **elevation:** Because `mat-elevation` usages have been moved out of component stylesheets, users who have
not invoked a theme mixin will not see any elevation shadows on Material components.
However, users that have created a custom theme which lacks the `elevation` property will
still see the default black shadows.

Additionally, users who want to use themed elevations in their custom components can create
their own shorthand mixin:

```sass
@import '~@angular/material/theming';

$myTheme: ...

@mixin my-elevation($zValue) {
  @include mat-theme-elevation($zValue, $myTheme);
}

```

and then invoke `angular-material-theme` with the `$myTheme` variable.



### Marked for Deprecation
A number of items throughout the library have been deprecated and are expected to be removed in v8.
#### CDK
Collections
- `SelectionModel.onChange` has been deprecated, use `SelectionModel.changed` instead.

Scrolling
- `ScrollDispatchModule` has been deprecated, use `ScrollingModule` instead.

Table
- `CdkTable.setFooterRowDef` has been deprecated, use `CdkTable.addFooterRowDef` and `CdkTable.removeFooterRowDef` instead.
- `CdkTable.setHeaderRowDef` has been deprecated, use `CdkTable.addHeaderRowDef` and `CdkTable.removeHeaderRowDef` instead.

#### Material
Dialog
- `matDialogAnimations.slideDialog` has been deprecated, use `matDialogAnimations.dialogContainer` instead.
- `MatDialogRef.afterOpen` has been deprecated, use `MatDialogRef.afterOpened` instead.
- `MatDialogRef.afterClose` has been deprecated, use `MatDialogRef.afterClosed` instead.
- `MatDialog.afterOpen` has been deprecated, use `MatDialog.afterOpened` instead.

Form Field
- `<mat-placeholder>` has been deprecated, use `<mat-label>` instead.
- `MatPlaceholder` has been deprecated, use `MatLabel` instead.

Paginator
- `$mat-paginator-selector-trigger-min-width` has been deprecated, use `$mat-paginator-selector-trigger-width` instead.

Select
- `matSelectAnimations.fadeInContent` has been deprecated and will be removed without replacement.
- The setter method for `MatSelect.focused` has been deprecated, `MatSelect.focused` will become readonly.

Toolbar
- `$mat-toolbar-height-mobile-portrait` has been deprecated and will be removed without replacement.
- `$mat-toolbar-height-mobile-landscape` has been deprecated and will be removed without replacement.

**NOTE:** In addition to the specific deprecations listed above, many component constructor methods contain
optional parameters which are expected to become required in v8.


### Bug Fixes

* **icon:** not taking current path after initialization  ([#13641](https://github.com/angular/material2/issues/13641)) ([df9ec7](https://github.com/angular/material2/commit/df9ec7))
* **list:** action list items clickable area not stretching the full width ([#13099](https://github.com/angular/material2/issues/13099)) ([f3057fa](https://github.com/angular/material2/commit/f3057fa))


<a name="7.0.0-rc.2"></a>
# 7.0.0-rc.2 (2018-10-15)


### Bug Fixes

* **drag-drop:** enterPredicate being called with wrong drop container ([#13578](https://github.com/angular/material2/issues/13578)) ([60b4a58](https://github.com/angular/material2/commit/60b4a58))
* **drag-drop:** rename cdkDrop to cdkDropList ([#13619](https://github.com/angular/material2/issues/13619)) ([160b688](https://github.com/angular/material2/commit/160b688))
* **ng-add:** do not add theme file if existing theme is set up ([#13468](https://github.com/angular/material2/issues/13468)) ([d1e59a2](https://github.com/angular/material2/commit/d1e59a2))
* **schematics:** template content exceeds max line length ([#13521](https://github.com/angular/material2/issues/13521)) ([b0a1daf](https://github.com/angular/material2/commit/b0a1daf))
* **schematics:** tree folder icons do not have enough contrast ([#13462](https://github.com/angular/material2/issues/13462)) ([4a0eb2b](https://github.com/angular/material2/commit/4a0eb2b))
* **virtual-scroll:** fix several small bugs ([#13597](https://github.com/angular/material2/issues/13597)) ([8cfaeea](https://github.com/angular/material2/commit/8cfaeea))

### Features

* **schematics:** prompt for name when generating component ([#13518](https://github.com/angular/material2/issues/13518)) ([9085de7](https://github.com/angular/material2/commit/9085de7))



<a name="7.0.0-rc.1"></a>
# 7.0.0-rc.1 (2018-10-09)


### Bug Fixes

* **a11y:** not being able to escape disabled focus trap using arrow keys ([#13133](https://github.com/angular/material2/issues/13133)) ([3c55caa](https://github.com/angular/material2/commit/3c55caa)), closes [#13132](https://github.com/angular/material2/issues/13132)
* **autocomplete:** closing parent overlay when pressing escape (Esc) ([#13413](https://github.com/angular/material2/issues/13413)) ([8dfd2ee](https://github.com/angular/material2/commit/8dfd2ee))
* **bottom-sheet:** dismiss bottom sheet on destroy ([#13120](https://github.com/angular/material2/issues/13120)) ([ffa4a06](https://github.com/angular/material2/commit/ffa4a06))
* **button-toggle:** not setting proper border in vertical mode ([#13397](https://github.com/angular/material2/issues/13397)) ([d58db5d](https://github.com/angular/material2/commit/d58db5d))
* **button-toggle:** remove extra focus indication added by firefox ([#13367](https://github.com/angular/material2/issues/13367)) ([3583913](https://github.com/angular/material2/commit/3583913))
* **checkbox:** ripple not hiding after click/touch ([#13295](https://github.com/angular/material2/issues/13295)) ([afb0352](https://github.com/angular/material2/commit/afb0352)), closes [#13291](https://github.com/angular/material2/issues/13291)
* **chips:** content not centered vertically on IE in some cases ([#13260](https://github.com/angular/material2/issues/13260)) ([4f43f5c](https://github.com/angular/material2/commit/4f43f5c))
* **chips:** ripple not clipping correctly in safari ([#12244](https://github.com/angular/material2/issues/12244)) ([eb95e61](https://github.com/angular/material2/commit/eb95e61))
* **chips:** selectionChange event firing when value has not changed ([#13173](https://github.com/angular/material2/issues/13173)) ([e8a6ea1](https://github.com/angular/material2/commit/e8a6ea1))
* **datepicker:** change overlay position strategy so the calendar is kept on-screen ([#11607](https://github.com/angular/material2/issues/11607)) ([f44d6db](https://github.com/angular/material2/commit/f44d6db))
* **drag-drop:** avoid interfering with element clicks ([#13152](https://github.com/angular/material2/issues/13152)) ([38e7dd2](https://github.com/angular/material2/commit/38e7dd2))
* **expansion-panel:** correct jump in panel sizing during animation ([#12509](https://github.com/angular/material2/issues/12509)) ([a706c8c](https://github.com/angular/material2/commit/a706c8c))
* **form-field:** blue box inside focused native select on IE ([#13187](https://github.com/angular/material2/issues/13187)) ([ab44d50](https://github.com/angular/material2/commit/ab44d50))
* **form-field:** not updating outline when prefix/suffix is added or removed ([#13253](https://github.com/angular/material2/issues/13253)) ([0060bd7](https://github.com/angular/material2/commit/0060bd7)), closes [#13251](https://github.com/angular/material2/issues/13251)
* **grid-list:** incorrectly laying out tiles for nested list ([#13086](https://github.com/angular/material2/issues/13086)) ([3e1cff0](https://github.com/angular/material2/commit/3e1cff0)), closes [#13074](https://github.com/angular/material2/issues/13074)
* **icon:** handle references for pages with base tag ([#12428](https://github.com/angular/material2/issues/12428)) ([9e5fd91](https://github.com/angular/material2/commit/9e5fd91)), closes [#9276](https://github.com/angular/material2/issues/9276)
* **list:** selection list not marking options as selected correctly when setting value with duplicates ([#13363](https://github.com/angular/material2/issues/13363)) ([bef9a17](https://github.com/angular/material2/commit/bef9a17))
* **menu:** incorrectly styling keyboard focus, if trigger is right clicked before opening ([#13136](https://github.com/angular/material2/issues/13136)) ([730e6a3](https://github.com/angular/material2/commit/730e6a3))
* **ng-add:** allow using noop animations ([#13429](https://github.com/angular/material2/issues/13429)) ([15a1ab7](https://github.com/angular/material2/commit/15a1ab7))
* **overlay:** incorrectly calculating centered position on a scrolled page with pushing ([#13185](https://github.com/angular/material2/issues/13185)) ([f5dd24a](https://github.com/angular/material2/commit/f5dd24a)), closes [#11868](https://github.com/angular/material2/issues/11868)
* **overlay:** wait for panel to detach before removing panelClass ([#13199](https://github.com/angular/material2/issues/13199)) ([238aef0](https://github.com/angular/material2/commit/238aef0)), closes [#13189](https://github.com/angular/material2/issues/13189)
* **paginator:** icons and labels not centered vertically on IE ([#12495](https://github.com/angular/material2/issues/12495)) ([fe3f37a](https://github.com/angular/material2/commit/fe3f37a)), closes [#12491](https://github.com/angular/material2/issues/12491)
* **schematics:** [@angular](https://github.com/angular)/material schematics not working ([#13406](https://github.com/angular/material2/issues/13406)) ([3f8ee74](https://github.com/angular/material2/commit/3f8ee74))
* **schematics:** name is required when generating the drag-drop schematic ([#13452](https://github.com/angular/material2/issues/13452)) ([4a9bbcb](https://github.com/angular/material2/commit/4a9bbcb))
* **schematics:** proper error if name is not specified ([#13379](https://github.com/angular/material2/issues/13379)) ([4a0b09a](https://github.com/angular/material2/commit/4a0b09a))
* **scrolling:** viewport ruler resize event running inside the NgZone ([#12909](https://github.com/angular/material2/issues/12909)) ([707a7ee](https://github.com/angular/material2/commit/707a7ee)), closes [#12883](https://github.com/angular/material2/issues/12883)
* **select:** allow extra content to be projected after label in mat-optgroup ([#13396](https://github.com/angular/material2/issues/13396)) ([cb5b15e](https://github.com/angular/material2/commit/cb5b15e)), closes [#11489](https://github.com/angular/material2/issues/11489)
* **select:** handle home and end keys on closed select ([#13278](https://github.com/angular/material2/issues/13278)) ([d6ba25f](https://github.com/angular/material2/commit/d6ba25f))
* **tabs:** disabled tab link not preventing router navigation ([#10358](https://github.com/angular/material2/issues/10358)) ([bf66d57](https://github.com/angular/material2/commit/bf66d57)), closes [#10354](https://github.com/angular/material2/issues/10354)
* **virtual-scroll:** don't set both `right` and `left` on the content ([#13412](https://github.com/angular/material2/issues/13412)) ([6ee9149](https://github.com/angular/material2/commit/6ee9149)), closes [#13231](https://github.com/angular/material2/issues/13231)


### Features

* **bottom-sheet:** add injection token for default options ([#13172](https://github.com/angular/material2/issues/13172)) ([3de3851](https://github.com/angular/material2/commit/3de3851)), closes [#13149](https://github.com/angular/material2/issues/13149)
* **datepicker:** add ng-content to datepicker header ([#13236](https://github.com/angular/material2/issues/13236)) ([3fc0d36](https://github.com/angular/material2/commit/3fc0d36)), closes [#13212](https://github.com/angular/material2/issues/13212)
* **schematics:** create drag-drop schematic ([#13368](https://github.com/angular/material2/issues/13368)) ([72ccd8b](https://github.com/angular/material2/commit/72ccd8b))



<a name="7.0.0-rc.0"></a>
# 7.0.0-rc.0 (2018-10-02)


### Bug Fixes

* **autocomplete:** dividers in list throwing off keyboard navigation ([#13224](https://github.com/angular/material2/issues/13224)) ([0886cef](https://github.com/angular/material2/commit/0886cef)), closes [#13200](https://github.com/angular/material2/issues/13200)
* **button:** fix stroked button border color ([#13219](https://github.com/angular/material2/issues/13219)) ([bfeb540](https://github.com/angular/material2/commit/bfeb540))
* **checkbox:** clear tabindex from host element ([#13308](https://github.com/angular/material2/issues/13308)) ([845388c](https://github.com/angular/material2/commit/845388c))
* **chips:** set aria-invalid on chip input ([#13249](https://github.com/angular/material2/issues/13249)) ([311d786](https://github.com/angular/material2/commit/311d786)), closes [#13205](https://github.com/angular/material2/issues/13205)
* **common:** account for async hammer loader when checking whether hammer is defined ([#12933](https://github.com/angular/material2/issues/12933)) ([d15431b](https://github.com/angular/material2/commit/d15431b))
* **drag-drop:** emitting incorrect index for horizontal list in rtl ([#13274](https://github.com/angular/material2/issues/13274)) ([f3bb0c7](https://github.com/angular/material2/commit/f3bb0c7))
* **drag-drop:** error on IE when customizing root element ([#13279](https://github.com/angular/material2/issues/13279)) ([e1071f0](https://github.com/angular/material2/commit/e1071f0))
* **drag-drop:** unable to return item to initial container within same drag sequence, if not connected to current drag container ([#13247](https://github.com/angular/material2/issues/13247)) ([0ac41a0](https://github.com/angular/material2/commit/0ac41a0)), closes [#13246](https://github.com/angular/material2/issues/13246)
* **form-field:** always use native input value to determine whether control is empty ([#13307](https://github.com/angular/material2/issues/13307)) ([10e6502](https://github.com/angular/material2/commit/10e6502)), closes [#13305](https://github.com/angular/material2/issues/13305)
* **form-field:** incorrect arrow color for native select ([#13046](https://github.com/angular/material2/issues/13046)) ([10b8353](https://github.com/angular/material2/commit/10b8353))
* **form-field:** native date/time input taller than text input ([#13321](https://github.com/angular/material2/issues/13321)) ([92a5f0e](https://github.com/angular/material2/commit/92a5f0e)), closes [#13317](https://github.com/angular/material2/issues/13317)
* **form-field:** native select outline not reset on firefox ([#12967](https://github.com/angular/material2/issues/12967)) ([38e492f](https://github.com/angular/material2/commit/38e492f))
* **grid:** fix mat-grid-tile position ([#12980](https://github.com/angular/material2/issues/12980)) ([966cf5f](https://github.com/angular/material2/commit/966cf5f))
* **grid-list:** exception thrown when rowHeight is set before first change detection run ([#13112](https://github.com/angular/material2/issues/13112)) ([e7007a2](https://github.com/angular/material2/commit/e7007a2)), closes [#13102](https://github.com/angular/material2/issues/13102)
* **grid-list:** throw error if invalid value is assigned for rowHeight ([#13254](https://github.com/angular/material2/issues/13254)) ([210f3f9](https://github.com/angular/material2/commit/210f3f9)), closes [#13252](https://github.com/angular/material2/issues/13252)
* **list:** set aria-multiselectable on selection list ([#13325](https://github.com/angular/material2/issues/13325)) ([877ef5d](https://github.com/angular/material2/commit/877ef5d))
* **overlay:** connected overlay directive inputs not updating position strategy ([#13066](https://github.com/angular/material2/issues/13066)) ([1d8e9af](https://github.com/angular/material2/commit/1d8e9af))
* **paginator:** getNumberOfPages off by one ([#10724](https://github.com/angular/material2/issues/10724)) ([016ba5c](https://github.com/angular/material2/commit/016ba5c)), closes [#10720](https://github.com/angular/material2/issues/10720) [#10699](https://github.com/angular/material2/issues/10699)
* **radio:** clear tabindex from host element ([#13323](https://github.com/angular/material2/issues/13323)) ([5c0a061](https://github.com/angular/material2/commit/5c0a061)), closes [#13311](https://github.com/angular/material2/issues/13311) [#13308](https://github.com/angular/material2/issues/13308)
* **schematics:** addressForm: fix bad Validators definition and TSLint ([#13285](https://github.com/angular/material2/issues/13285)) ([267dd65](https://github.com/angular/material2/commit/267dd65))
* **schematics:** dashboard schematic fails parsing declaration in spec ([#13269](https://github.com/angular/material2/issues/13269)) ([543cb9f](https://github.com/angular/material2/commit/543cb9f))
* **schematics:** fix typo in table's datasource ([#13283](https://github.com/angular/material2/issues/13283)) ([0ccdfc8](https://github.com/angular/material2/commit/0ccdfc8))
* **schematics:** nav schematic generates TSLint errors ([#13268](https://github.com/angular/material2/issues/13268)) ([8d25fd1](https://github.com/angular/material2/commit/8d25fd1))
* **schematics:** remove unnecessary semicolon in tree component ([#13284](https://github.com/angular/material2/issues/13284)) ([8558878](https://github.com/angular/material2/commit/8558878))
* **schematics:** sidenav toolbar should use default background ([#13282](https://github.com/angular/material2/issues/13282)) ([c454f7b](https://github.com/angular/material2/commit/c454f7b))
* **schematics:** table schematic not expanding full width ([#13234](https://github.com/angular/material2/issues/13234)) ([884762f](https://github.com/angular/material2/commit/884762f))
* **schematics:** toolbar in nav w/o z-index causes issues with dashboard ([#13270](https://github.com/angular/material2/issues/13270)) ([d74e38c](https://github.com/angular/material2/commit/d74e38c))
* **select:** give native select a bigger clickable area ([#13228](https://github.com/angular/material2/issues/13228)) ([6da7d23](https://github.com/angular/material2/commit/6da7d23))
* **slide-toggle:** clear tabindex from host element ([#13311](https://github.com/angular/material2/issues/13311)) ([119fafd](https://github.com/angular/material2/commit/119fafd)), closes [#13308](https://github.com/angular/material2/issues/13308)
* **snack-bar:** button not centered inside snack bar on IE11 ([#13062](https://github.com/angular/material2/issues/13062)) ([4e05745](https://github.com/angular/material2/commit/4e05745))
* **snackbar:** move elevation style to snackbar theme ([#13273](https://github.com/angular/material2/issues/13273)) ([96e670f](https://github.com/angular/material2/commit/96e670f))
* **stepper:** vertical step header labels not centered on IE ([#13262](https://github.com/angular/material2/issues/13262)) ([40fb5cb](https://github.com/angular/material2/commit/40fb5cb))
* **tooltip:** custom gesture config not set up ([#12941](https://github.com/angular/material2/issues/12941)) ([1852563](https://github.com/angular/material2/commit/1852563)), closes [#12940](https://github.com/angular/material2/issues/12940) [#12917](https://github.com/angular/material2/issues/12917)
* **tooltip:** hiding and reopening for consecutive show calls ([#13326](https://github.com/angular/material2/issues/13326)) ([b5001f6](https://github.com/angular/material2/commit/b5001f6))


### Features

* **badge:** allow badge to be disabled ([#13196](https://github.com/angular/material2/issues/13196)) ([bfc1286](https://github.com/angular/material2/commit/bfc1286)), closes [#13191](https://github.com/angular/material2/issues/13191)
* **button-toggle:** align with 2018 material design spec ([#12443](https://github.com/angular/material2/issues/12443)) ([fd3eb6a](https://github.com/angular/material2/commit/fd3eb6a))
* **overlay:** add option to automatically dispose on navigation ([#12592](https://github.com/angular/material2/issues/12592)) ([d48b1ba](https://github.com/angular/material2/commit/d48b1ba)), closes [#12544](https://github.com/angular/material2/issues/12544)
* **overlay:** add support for swappable position strategies ([#12306](https://github.com/angular/material2/issues/12306)) ([e0f3ae7](https://github.com/angular/material2/commit/e0f3ae7))
* **schematics:** support for cdk `ng add` ([#13319](https://github.com/angular/material2/issues/13319)) ([ac3f8c4](https://github.com/angular/material2/commit/ac3f8c4))
* **schematics:** support for cdk `ng-update`. ([#13303](https://github.com/angular/material2/issues/13303)) ([1afddfb](https://github.com/angular/material2/commit/1afddfb))
* **tabs:** align with 2018 material design spec ([#12605](https://github.com/angular/material2/issues/12605)) ([0c5598c](https://github.com/angular/material2/commit/0c5598c))
* **tree:** support units different than px for indentation ([#12991](https://github.com/angular/material2/issues/12991)) ([590d294](https://github.com/angular/material2/commit/590d294))


### Performance Improvements

* **virtual-scroll:** use auditTime instead of sampleTime ([#13131](https://github.com/angular/material2/issues/13131)) ([c26dc74](https://github.com/angular/material2/commit/c26dc74))


### update

* **ripple:** remove deprecated speed factor option ([#12258](https://github.com/angular/material2/issues/12258)) ([a6c91bc](https://github.com/angular/material2/commit/a6c91bc))


### BREAKING CHANGES

* **ripple:** deprecated `[matRippleSpeedFactor]` and `baseSpeedFactor` for the ripples have been removed. Use the new animation config instead.



<a name="7.0.0-beta.2"></a>
# 7.0.0-beta.2 (2018-09-20)


### Highlights

* This release includes a number of changes to bring the components more in line with the 2018
  Material Design update. If you are overriding the default styles, you may find that you need to
  tweak them to look right after these changes.

### Bug Fixes

* **card:** better scaling for avatar image ([#13032](https://github.com/angular/material2/issues/13032)) ([19ce1a1](https://github.com/angular/material2/commit/19ce1a1))
* **checkbox, slide-toggle:** no margin if content is projected ([#12973](https://github.com/angular/material2/issues/12973)) ([4636a98](https://github.com/angular/material2/commit/4636a98)), closes [#4720](https://github.com/angular/material2/issues/4720)
* **chips:** arrow keys resetting focus to first chip ([#12987](https://github.com/angular/material2/issues/12987)) ([959c827](https://github.com/angular/material2/commit/959c827))
* **dialog:** clean up open dialogs on destroy ([#12835](https://github.com/angular/material2/issues/12835)) ([4e15ba9](https://github.com/angular/material2/commit/4e15ba9))
* **expansion:** MatExpansionHeader transition animations ([#13088](https://github.com/angular/material2/issues/13088)) ([4a96539](https://github.com/angular/material2/commit/4a96539)), closes [#11990](https://github.com/angular/material2/issues/11990) [#11990](https://github.com/angular/material2/issues/11990) [#11990](https://github.com/angular/material2/issues/11990) [#11990](https://github.com/angular/material2/issues/11990) [#11990](https://github.com/angular/material2/issues/11990) [#11990](https://github.com/angular/material2/issues/11990) [#11990](https://github.com/angular/material2/issues/11990) [#11990](https://github.com/angular/material2/issues/11990)
* **form-field:** Make labels show while printing ([#12766](https://github.com/angular/material2/issues/12766)) ([e88271a](https://github.com/angular/material2/commit/e88271a))
* **table:** incorrect padding and text alignment in rtl ([#12280](https://github.com/angular/material2/issues/12280)) ([2b89342](https://github.com/angular/material2/commit/2b89342)), closes [#12276](https://github.com/angular/material2/issues/12276)


### Features

* **button:** align with 2018 material design spec ([#13083](https://github.com/angular/material2/issues/13083)) ([79801e0](https://github.com/angular/material2/commit/79801e0)), closes [#12537](https://github.com/angular/material2/issues/12537) [#13011](https://github.com/angular/material2/issues/13011)
* **card:** align with 2018 material design spec ([#12731](https://github.com/angular/material2/issues/12731)) ([484dc8b](https://github.com/angular/material2/commit/484dc8b))
* **checkbox:** align with 2018 material design spec ([#12493](https://github.com/angular/material2/issues/12493)) ([95acccc](https://github.com/angular/material2/commit/95acccc))
* **chips:** align with 2018 material design spec ([#12838](https://github.com/angular/material2/issues/12838)) ([3cc9c67](https://github.com/angular/material2/commit/3cc9c67))
* **dialog:** align with 2018 material design spec ([#12705](https://github.com/angular/material2/issues/12705)) ([00b7233](https://github.com/angular/material2/commit/00b7233))
* **elevation:** move elevation rules into theme stylesheets ([#11344](https://github.com/angular/material2/issues/11344)) ([9c075f5](https://github.com/angular/material2/commit/9c075f5)), closes [#11343](https://github.com/angular/material2/issues/11343)


### BREAKING CHANGES

* **dialog:** * The `matDialogAnimations.slideDialog` symbol has been renamed to `matDialogAnimations.dialogContainer`.

![angular_material_-_google_chrome_2018-08-16_20-43-44](https://user-images.githubusercontent.com/4450522/44231568-da0d2780-a19e-11e8-9836-4f1b15f9bcc2.png)
![angular_material_-_google_chrome_2018-08-16_21-30-17](https://user-images.githubusercontent.com/4450522/44231576-e09b9f00-a19e-11e8-9fae-8ad9cf0be8e5.png)
* **elevation:** Because `mat-elevation` usages have been moved out of component stylesheets, users who have
not invoked a theme mixin will not see any elevation shadows on Material components.
However, users that have created a custom theme which lacks the `elevation` property will
still see the default black shadows.

Additionally, users who want to use themed elevations in their custom components can create
their own shorthand mixin:

```sass
@import '~@angular/material/theming';

$myTheme: ...

@mixin my-elevation($zValue) {
  @include mat-theme-elevation($zValue, $myTheme);
}

```

and then invoke `angular-material-theme` with the `$myTheme` variable.



<a name="7.0.0-beta.1"></a>
# 7.0.0-beta.1 (2018-09-17)


### Bug Fixes

* **button-toggle:** underlying input not disabled when group is disabled ([#11610](https://github.com/angular/material2/issues/11610)) ([bd21f21](https://github.com/angular/material2/commit/bd21f21)), closes [#11608](https://github.com/angular/material2/issues/11608)
* **chips:** default click action on chip being prevented ([#12856](https://github.com/angular/material2/issues/12856)) ([ae3ce4a](https://github.com/angular/material2/commit/ae3ce4a)), closes [#9032](https://github.com/angular/material2/issues/9032)
* **datepicker:** allow calendar cell selection via the space key ([#13098](https://github.com/angular/material2/issues/13098)) ([5c4a334](https://github.com/angular/material2/commit/5c4a334))
* **drag-drop:** DOM element not being returned to initial container on drop ([#12948](https://github.com/angular/material2/issues/12948)) ([fb7bf90](https://github.com/angular/material2/commit/fb7bf90)), closes [#12944](https://github.com/angular/material2/issues/12944)
* **drag-drop:** dragging class not being applied on drop container ([#12921](https://github.com/angular/material2/issues/12921)) ([ec0de52](https://github.com/angular/material2/commit/ec0de52))
* **drag-drop:** incorrectly calculating index when sorting horizontally ([#13082](https://github.com/angular/material2/issues/13082)) ([664ef4c](https://github.com/angular/material2/commit/664ef4c)), closes [#13072](https://github.com/angular/material2/issues/13072)
* **drag-drop:** incorrectly calculating pointer position inside element, in some cases ([#13111](https://github.com/angular/material2/issues/13111)) ([22cd3ed](https://github.com/angular/material2/commit/22cd3ed)), closes [#13107](https://github.com/angular/material2/issues/13107)
* **drag-drop:** incorrectly picking up transitions on non-transform properties ([#12966](https://github.com/angular/material2/issues/12966)) ([951add9](https://github.com/angular/material2/commit/951add9))
* **drag-drop:** not dropping immediately for failed drag after a successful one ([#13097](https://github.com/angular/material2/issues/13097)) ([32a0010](https://github.com/angular/material2/commit/32a0010)), closes [#13091](https://github.com/angular/material2/issues/13091)
* **drag-drop:** text selection not disabled on safari if user drags out of the viewport ([#12864](https://github.com/angular/material2/issues/12864)) ([8ee5fb6](https://github.com/angular/material2/commit/8ee5fb6))
* **drawer:** respect `NoopAnimationsModule` and `@.disabled` binding ([#12839](https://github.com/angular/material2/issues/12839)) ([23df492](https://github.com/angular/material2/commit/23df492))
* **expansion:** disable all animations when using NoopAnimationsModule ([#12855](https://github.com/angular/material2/issues/12855)) ([3e22641](https://github.com/angular/material2/commit/3e22641)), closes [#10590](https://github.com/angular/material2/issues/10590)
* **form-field:** don't set up mutation observer on non-outline appearances ([#12976](https://github.com/angular/material2/issues/12976)) ([cbfbade](https://github.com/angular/material2/commit/cbfbade))
* **form-field:** remove chevron from native multi-select ([#13009](https://github.com/angular/material2/issues/13009)) ([b62343a](https://github.com/angular/material2/commit/b62343a))
* **grid-list:** better handling of negative columns ([#12939](https://github.com/angular/material2/issues/12939)) ([cfb83a0](https://github.com/angular/material2/commit/cfb83a0))
* **input:** do not focus input element twice ([#12851](https://github.com/angular/material2/issues/12851)) ([7d586e4](https://github.com/angular/material2/commit/7d586e4)), closes [#12849](https://github.com/angular/material2/issues/12849)
* **ng-update:** do not throw if imports without named bindings are used ([#12866](https://github.com/angular/material2/issues/12866)) ([#12984](https://github.com/angular/material2/issues/12984)) ([fe64211](https://github.com/angular/material2/commit/fe64211)), closes [#11571](https://github.com/angular/material2/issues/11571)
* **overlay:** correct misspelled flexibleDiemsions property ([#12927](https://github.com/angular/material2/issues/12927)) ([5d1643a](https://github.com/angular/material2/commit/5d1643a)), closes [#12925](https://github.com/angular/material2/issues/12925)
* **overlay:** infinite loop when used together with zone-patch-rxjs ([#13081](https://github.com/angular/material2/issues/13081)) ([c2e502c](https://github.com/angular/material2/commit/c2e502c)), closes [#12686](https://github.com/angular/material2/issues/12686)
* **platform:** wrap MSStream property detection as string to prevent Closure property renaming ([#13117](https://github.com/angular/material2/issues/13117)) ([aef61eb](https://github.com/angular/material2/commit/aef61eb)), closes [#12223](https://github.com/angular/material2/issues/12223)
* **portal:** remove dependency on deprecated parentInjector ([#12986](https://github.com/angular/material2/issues/12986)) ([f39e091](https://github.com/angular/material2/commit/f39e091))
* **progress-bar:** buffer background animation stuttering ([#13114](https://github.com/angular/material2/issues/13114)) ([2f2e116](https://github.com/angular/material2/commit/2f2e116))
* **ripple:** ripples not being cleared if touch sequence is canceled ([#12936](https://github.com/angular/material2/issues/12936)) ([948e563](https://github.com/angular/material2/commit/948e563))
* **sidenav:** not positioning correctly in rtl ([#12741](https://github.com/angular/material2/issues/12741)) ([9d3d95f](https://github.com/angular/material2/commit/9d3d95f))
* **snack-bar:** dismiss snack bar on destroy ([#13042](https://github.com/angular/material2/issues/13042)) ([50be24b](https://github.com/angular/material2/commit/50be24b))
* **tabs:** pagination state not updated when tab content changes ([#12911](https://github.com/angular/material2/issues/12911)) ([a7de64a](https://github.com/angular/material2/commit/a7de64a)), closes [#12901](https://github.com/angular/material2/issues/12901)
* **tooltip:** not showing up on touch devices ([#12940](https://github.com/angular/material2/issues/12940)) ([722dfb3](https://github.com/angular/material2/commit/722dfb3)), closes [#12917](https://github.com/angular/material2/issues/12917)
* **tooltip:** text fields not editable if tooltip is applied in safari ([#12959](https://github.com/angular/material2/issues/12959)) ([0389d12](https://github.com/angular/material2/commit/0389d12)), closes [#12953](https://github.com/angular/material2/issues/12953)
* **tree:** theming nested notes ([#12938](https://github.com/angular/material2/issues/12938)) ([e24f24a](https://github.com/angular/material2/commit/e24f24a))
* **typings:** update typings to support more strict typings in RxJS 6.3.2 ([#12979](https://github.com/angular/material2/issues/12979)) ([0a25fca](https://github.com/angular/material2/commit/0a25fca))


### Features

* **list:** add new `<mat-action-list>`  ([#12415](https://github.com/angular/material2/issues/12415)) ([69fa762](https://github.com/angular/material2/commit/69fa762))
* **menu:** align with 2018 material design spec ([#12331](https://github.com/angular/material2/issues/12331)) ([c812268](https://github.com/angular/material2/commit/c812268))
* **ng-add:** add x-prompts to install schematics ([#13058](https://github.com/angular/material2/issues/13058)) ([a5bc79c](https://github.com/angular/material2/commit/a5bc79c))
* **schematics:** compatibility with Angular CLI 6.2.0 ([#13078](https://github.com/angular/material2/issues/13078)) ([714c205](https://github.com/angular/material2/commit/714c205)), closes [#11438](https://github.com/angular/material2/issues/11438)
* **select:** align panel appearance and animation with 2018 material design spec ([#12975](https://github.com/angular/material2/issues/12975)) ([18d0fa8](https://github.com/angular/material2/commit/18d0fa8))
* **stepper:** Create MAT_STEPPER_GLOBAL_OPTIONS InjectionToken ([#11457](https://github.com/angular/material2/issues/11457)) ([9ab2c90](https://github.com/angular/material2/commit/9ab2c90))


### BREAKING CHANGES

* **overlay:** The `flexibleDiemsions` property on `CdkConnectedOverlay` has been renamed to `flexibleDimensions`



<a name="7.0.0-beta.0"></a>
# [7.0.0-beta.0](https://github.com/angular/material2/compare/6.4.0...7.0.0-beta.0) (2018-08-30)

### Highlights
* Support for drag and drop in `@angular/cdk/drag-drop`!
* Support for virtual scrolling in `@angular/cdk/scrolling`!
* You can now use a native `<select>` element in `<mat-form-field>`
* Updated visuals for 2018 Material Design update (in-progress, not all components are done)

_Note that schematics for v7 are still in-progress._

You can view a beta version of the docs at https://beta-angular-material-io.firebaseapp.com.

### Bug Fixes

* **autocomplete:** remove aria-owns attribute while closed ([#12333](https://github.com/angular/material2/issues/12333)) ([f0a0ab1](https://github.com/angular/material2/commit/f0a0ab1)), closes [#12332](https://github.com/angular/material2/issues/12332)
* **autocomplete:** reopening closed autocomplete when coming back to tab ([#12372](https://github.com/angular/material2/issues/12372)) ([c2b488e](https://github.com/angular/material2/commit/c2b488e)), closes [#12337](https://github.com/angular/material2/issues/12337)
* **autofill:** avoid firing unnecessary event on initial render of input ([#12116](https://github.com/angular/material2/issues/12116)) ([c2fc3f4](https://github.com/angular/material2/commit/c2fc3f4))
* **badge:** apply view encapsulation attributes on badge element ([#12870](https://github.com/angular/material2/issues/12870)) ([db1d51f](https://github.com/angular/material2/commit/db1d51f))
* **badge:** hide badges with no content ([#12239](https://github.com/angular/material2/issues/12239)) ([701a0dd](https://github.com/angular/material2/commit/701a0dd))
* **bidi:** default invalid directionality values to ltr ([#12396](https://github.com/angular/material2/issues/12396)) ([e644350](https://github.com/angular/material2/commit/e644350))
* **breakpoints:** emit only one event for adjacent breakpoint changes. ([#11007](https://github.com/angular/material2/issues/11007)) ([2830a64](https://github.com/angular/material2/commit/2830a64))
* **button:** allow for non-colored flat button ([#12550](https://github.com/angular/material2/issues/12550)) ([8c08bb1](https://github.com/angular/material2/commit/8c08bb1))
* **button:** allow transition for the button focus overlay for all buttons ([#12552](https://github.com/angular/material2/issues/12552)) ([a080a79](https://github.com/angular/material2/commit/a080a79))
* **button-toggle:** clickable area not stretching when custom width is set ([#12642](https://github.com/angular/material2/issues/12642)) ([ecf8b0d](https://github.com/angular/material2/commit/ecf8b0d)), closes [#8432](https://github.com/angular/material2/issues/8432)
* **button-toggle:** forward tabindex to underlying button ([#12538](https://github.com/angular/material2/issues/12538)) ([7dff5f8](https://github.com/angular/material2/commit/7dff5f8))
* **button-toggle:** set aria-disabled based on group disabled state ([#12828](https://github.com/angular/material2/issues/12828)) ([5969523](https://github.com/angular/material2/commit/5969523))
* **card:** images in title-group overlapping content ([#12205](https://github.com/angular/material2/issues/12205)) ([89d16b2](https://github.com/angular/material2/commit/89d16b2)), closes [#10031](https://github.com/angular/material2/issues/10031)
* **card:** incorrectly inverting inset divider in rtl ([#12285](https://github.com/angular/material2/issues/12285)) ([fba4a93](https://github.com/angular/material2/commit/fba4a93))
* **cdk-text-field:** prevent keyframes from getting stripped by LibSass ([#12567](https://github.com/angular/material2/issues/12567)) ([915590e](https://github.com/angular/material2/commit/915590e))
* **checkbox:** prevent error when disabling while focused ([#12327](https://github.com/angular/material2/issues/12327)) ([c4cacce](https://github.com/angular/material2/commit/c4cacce)), closes [#12323](https://github.com/angular/material2/issues/12323)
* **chips:** chip list removing focus from first chip when adding through the input ([#12840](https://github.com/angular/material2/issues/12840)) ([c3b2d4f](https://github.com/angular/material2/commit/c3b2d4f))
* **chips:** dynamic chip input placeholder changes not being propagated to form field ([#12422](https://github.com/angular/material2/issues/12422)) ([e007c27](https://github.com/angular/material2/commit/e007c27)), closes [#11861](https://github.com/angular/material2/issues/11861)
* **chips:** focus indication not visible in high contrast mode ([#12431](https://github.com/angular/material2/issues/12431)) ([bcf4c9f](https://github.com/angular/material2/commit/bcf4c9f))
* **chips:** focus not being restored correctly on chip removal when inside component with animations ([#12416](https://github.com/angular/material2/issues/12416)) ([5fb338b](https://github.com/angular/material2/commit/5fb338b)), closes [#12374](https://github.com/angular/material2/issues/12374)
* **chips:** focus not restored properly if chip has been removed by click ([#12788](https://github.com/angular/material2/issues/12788)) ([3da390e](https://github.com/angular/material2/commit/3da390e)), closes [#12416](https://github.com/angular/material2/issues/12416)
* **chips:** form field not appearing as blurred when used without an input ([#12858](https://github.com/angular/material2/issues/12858)) ([f82a94b](https://github.com/angular/material2/commit/f82a94b))
* **chips:** improved image scaling in avatar ([#12843](https://github.com/angular/material2/issues/12843)) ([f6e787a](https://github.com/angular/material2/commit/f6e787a)), closes [#12660](https://github.com/angular/material2/issues/12660)
* **chips:** incorrectly handling disabled state ([#12659](https://github.com/angular/material2/issues/12659)) ([65ad6ab](https://github.com/angular/material2/commit/65ad6ab)), closes [#11089](https://github.com/angular/material2/issues/11089)
* **chips:** losing focus if active chip is deleted ([#11910](https://github.com/angular/material2/issues/11910)) ([e13bfe0](https://github.com/angular/material2/commit/e13bfe0))
* **chips:** support focusing first/last item using home/end ([#11892](https://github.com/angular/material2/issues/11892)) ([3723191](https://github.com/angular/material2/commit/3723191))
* **collections:** align SelectionModel to `changed` naming ([#8286](https://github.com/angular/material2/issues/8286)) ([27e88c3](https://github.com/angular/material2/commit/27e88c3))
* **datepicker:** able to open from readonly input using keyboard control ([#12880](https://github.com/angular/material2/issues/12880)) ([548d2b7](https://github.com/angular/material2/commit/548d2b7))
* **datepicker:** add minDate and maxDate validation in demo-app ([#12531](https://github.com/angular/material2/issues/12531)) ([2b29c93](https://github.com/angular/material2/commit/2b29c93))
* **datepicker:** input not picking up changes if datepicker is assigned after init ([#12546](https://github.com/angular/material2/issues/12546)) ([3299628](https://github.com/angular/material2/commit/3299628))
* **datepicker:** multiple dialog open if the user holds down enter key ([#12238](https://github.com/angular/material2/issues/12238)) ([8e63656](https://github.com/angular/material2/commit/8e63656))
* **datepicker:** screenreaders report editable grid cells ([#12275](https://github.com/angular/material2/issues/12275)) ([a2dcf21](https://github.com/angular/material2/commit/a2dcf21))
* **datepicker-toggle:** forward tabindex to underlying button ([#12461](https://github.com/angular/material2/issues/12461)) ([648eb4a](https://github.com/angular/material2/commit/648eb4a)), closes [#12456](https://github.com/angular/material2/issues/12456)
* **expansion:** respect parent accordion hideToggle binding ([#12725](https://github.com/angular/material2/issues/12725)) ([9c184ea](https://github.com/angular/material2/commit/9c184ea)), closes [#6529](https://github.com/angular/material2/issues/6529)
* **expansion-panel:** elevation transition not working ([#12860](https://github.com/angular/material2/issues/12860)) ([ac8ed31](https://github.com/angular/material2/commit/ac8ed31))
* **expansion-panel:** focus lost if focused element is inside closing panel ([#12692](https://github.com/angular/material2/issues/12692)) ([baf6419](https://github.com/angular/material2/commit/baf6419))
* **expansion-panel:** implement keyboard controls ([#12427](https://github.com/angular/material2/issues/12427)) ([32e5d72](https://github.com/angular/material2/commit/32e5d72))
* **form-field:** allow for measuring outline gap when label is not in dom ([#12782](https://github.com/angular/material2/issues/12782)) ([21095f5](https://github.com/angular/material2/commit/21095f5))
* **form-field:** legacy ripple underline jumps in edge ([#12648](https://github.com/angular/material2/issues/12648)) ([70d1be8](https://github.com/angular/material2/commit/70d1be8)), closes [#6351](https://github.com/angular/material2/issues/6351)
* **form-field:** outline gap not calculated when appearance is provided through DI ([#12767](https://github.com/angular/material2/issues/12767)) ([8e49388](https://github.com/angular/material2/commit/8e49388)), closes [#12765](https://github.com/angular/material2/issues/12765)
* **form-field:** remove outline gap for empty labels ([#12637](https://github.com/angular/material2/issues/12637)) ([3d4fc82](https://github.com/angular/material2/commit/3d4fc82))
* **form-field:** reset inputs not being reset on safari ([#12413](https://github.com/angular/material2/issues/12413)) ([4884dac](https://github.com/angular/material2/commit/4884dac)), closes [#12408](https://github.com/angular/material2/issues/12408)
* **form-field:** unable to distinguish disabled form field in high contrast mode ([#12445](https://github.com/angular/material2/issues/12445)) ([df2b371](https://github.com/angular/material2/commit/df2b371))
* **form-field:** update label gap for outline style ([#12555](https://github.com/angular/material2/issues/12555)) ([03527c6](https://github.com/angular/material2/commit/03527c6))
* **grid-list:** not picking up indirect descendants ([#12823](https://github.com/angular/material2/issues/12823)) ([c04d2ae](https://github.com/angular/material2/commit/c04d2ae)), closes [#12809](https://github.com/angular/material2/issues/12809)
* **input:** only monitor focus origin on browser platform ([#11604](https://github.com/angular/material2/issues/11604)) ([625f792](https://github.com/angular/material2/commit/625f792))
* **list:** disable hover styling on touch devices ([#12520](https://github.com/angular/material2/issues/12520)) ([795c956](https://github.com/angular/material2/commit/795c956))
* **list:** improved image scaling in avatar ([#12660](https://github.com/angular/material2/issues/12660)) ([9a59c2a](https://github.com/angular/material2/commit/9a59c2a)), closes [#8131](https://github.com/angular/material2/issues/8131)
* **live-announcer:** avoid triggering a reflow when reading directive content ([#12638](https://github.com/angular/material2/issues/12638)) ([040f9db](https://github.com/angular/material2/commit/040f9db))
* **live-announcer:** duplicate live element when coming in from the server ([#12378](https://github.com/angular/material2/issues/12378)) ([a10bfa4](https://github.com/angular/material2/commit/a10bfa4)), closes [#11940](https://github.com/angular/material2/issues/11940)
* **menu:** changed after checked error when toggling quickly between triggers for same submenu ([#12209](https://github.com/angular/material2/issues/12209)) ([b53b66a](https://github.com/angular/material2/commit/b53b66a))
* **menu:** collapse empty menu panel ([#12211](https://github.com/angular/material2/issues/12211)) ([b23cecd](https://github.com/angular/material2/commit/b23cecd))
* **menu:** focus indication not visible in high contrast mode ([#12201](https://github.com/angular/material2/issues/12201)) ([56bce47](https://github.com/angular/material2/commit/56bce47))
* **menu:** menu content data being cleared when lazy-loaded content is reused between nested triggers ([#12476](https://github.com/angular/material2/issues/12476)) ([1e1751f](https://github.com/angular/material2/commit/1e1751f)), closes [#12467](https://github.com/angular/material2/issues/12467)
* **menu:** showing scrollbars on first open in Edge if item width is set ([#12141](https://github.com/angular/material2/issues/12141)) ([275de51](https://github.com/angular/material2/commit/275de51))
* **menu:** throw better error when trying to open undefined menu ([#12688](https://github.com/angular/material2/issues/12688)) ([c90dcfb](https://github.com/angular/material2/commit/c90dcfb)), closes [#12649](https://github.com/angular/material2/issues/12649)
* **moment-date-adapter:** not returning utc date when parsing ([#12029](https://github.com/angular/material2/issues/12029)) ([d431566](https://github.com/angular/material2/commit/d431566))
* **ng-add:** do not incorrectly insert custom-theme into CSS files ([#12711](https://github.com/angular/material2/issues/12711)) ([51da6a6](https://github.com/angular/material2/commit/51da6a6))
* **ng-add:** inserted dependencies should be sorted ([#12847](https://github.com/angular/material2/issues/12847)) ([0760dad](https://github.com/angular/material2/commit/0760dad))
* **ng-add:** material version could not be determined ([#12751](https://github.com/angular/material2/issues/12751)) ([a027ae5](https://github.com/angular/material2/commit/a027ae5))
* **ng-update:** do not throw if imports without named bindings are used ([#12866](https://github.com/angular/material2/issues/12866)) ([cef2e1e](https://github.com/angular/material2/commit/cef2e1e)), closes [#11571](https://github.com/angular/material2/issues/11571)
* **ng-update:** form-field css name incorrectly updated ([#12768](https://github.com/angular/material2/issues/12768)) ([4830be8](https://github.com/angular/material2/commit/4830be8))
* **ng-update:** support parenthesized directive metadata ([#12314](https://github.com/angular/material2/issues/12314)) ([c5b87da](https://github.com/angular/material2/commit/c5b87da))
* **overlay:** avoid same overlay being added to the keyboard event stack multiple times ([#12222](https://github.com/angular/material2/issues/12222)) ([45d6ae4](https://github.com/angular/material2/commit/45d6ae4))
* **overlay:** flexible overlay with push not handling scroll offset and position locking ([#11628](https://github.com/angular/material2/issues/11628)) ([f8b70cd](https://github.com/angular/material2/commit/f8b70cd))
* **overlay:** flexible overlay with push not handling scroll offset and position locking ([#12624](https://github.com/angular/material2/issues/12624)) ([e765d8e](https://github.com/angular/material2/commit/e765d8e)), closes [#11365](https://github.com/angular/material2/issues/11365)
* **paginator:** inconsistently disabling tooltips between browsers ([#12539](https://github.com/angular/material2/issues/12539)) ([73a3d4a](https://github.com/angular/material2/commit/73a3d4a))
* **progress-bar:** avoid error on SSR if pathname is undefined ([#12807](https://github.com/angular/material2/issues/12807)) ([f3af763](https://github.com/angular/material2/commit/f3af763))
* **progress-bar:** generate correct url on server ([#12813](https://github.com/angular/material2/issues/12813)) ([787f31a](https://github.com/angular/material2/commit/787f31a))
* **progress-bar:** incorrectly handling current path when using hash location strategy ([#12713](https://github.com/angular/material2/issues/12713)) ([5727eac](https://github.com/angular/material2/commit/5727eac)), closes [#12710](https://github.com/angular/material2/issues/12710)
* **progress-bar:** query animation not working inside routes with named outlets ([#12350](https://github.com/angular/material2/issues/12350)) ([b9c0d85](https://github.com/angular/material2/commit/b9c0d85)), closes [#12014](https://github.com/angular/material2/issues/12014) [#12338](https://github.com/angular/material2/issues/12338)
* **progress-bar:** query state animation not working ([#11459](https://github.com/angular/material2/issues/11459)) ([b40967f](https://github.com/angular/material2/commit/b40967f)), closes [#11453](https://github.com/angular/material2/issues/11453)
* **ripple:** don't hide directive host in high contrast ([#12168](https://github.com/angular/material2/issues/12168)) ([944caf9](https://github.com/angular/material2/commit/944caf9))
* **ripple:** don't launch ripple for fake mouse events ([#11997](https://github.com/angular/material2/issues/11997)) ([4639a87](https://github.com/angular/material2/commit/4639a87))
* **schematics:** do not allow specifying native view encapsulation ([#12632](https://github.com/angular/material2/issues/12632)) ([0a823dd](https://github.com/angular/material2/commit/0a823dd))
* **schematics:** fix object iteration error in dashboard ([#12216](https://github.com/angular/material2/issues/12216)) ([b589828](https://github.com/angular/material2/commit/b589828))
* **schematics:** generated spec files not working ([#12842](https://github.com/angular/material2/issues/12842)) ([c09da0b](https://github.com/angular/material2/commit/c09da0b)), closes [#12778](https://github.com/angular/material2/issues/12778)
* **schematics:** properly detect tsconfig files ([#12434](https://github.com/angular/material2/issues/12434)) ([08e6653](https://github.com/angular/material2/commit/08e6653))
* **schematics:** properly indent inline files ([#12317](https://github.com/angular/material2/issues/12317)) ([ed4e082](https://github.com/angular/material2/commit/ed4e082))
* **schematics:** tree schematic not working ([#12281](https://github.com/angular/material2/issues/12281)) ([ba134f4](https://github.com/angular/material2/commit/ba134f4))
* **select:** arrow position/animation for appearance="standard" ([#12045](https://github.com/angular/material2/issues/12045)) ([58f3c54](https://github.com/angular/material2/commit/58f3c54))
* **select:** pointing to non-existent element via aria-labelledby ([#12411](https://github.com/angular/material2/issues/12411)) ([3b7f0f1](https://github.com/angular/material2/commit/3b7f0f1)), closes [#12405](https://github.com/angular/material2/issues/12405)
* **select:** skip disabled options when using ctrl + a ([#12553](https://github.com/angular/material2/issues/12553)) ([559b95e](https://github.com/angular/material2/commit/559b95e)), closes [#12543](https://github.com/angular/material2/issues/12543)
* **select,autocomplete:** unable to set custom id on mat-option ([#11573](https://github.com/angular/material2/issues/11573)) ([29d5173](https://github.com/angular/material2/commit/29d5173)), closes [#11572](https://github.com/angular/material2/issues/11572)
* **selection-list:** do not allow toggling disabled options ([#12617](https://github.com/angular/material2/issues/12617)) ([4cfdb20](https://github.com/angular/material2/commit/4cfdb20)), closes [#12608](https://github.com/angular/material2/issues/12608)
* **selection-list:** proper styling not being applied when using mat-list-icon ([#12879](https://github.com/angular/material2/issues/12879)) ([7bc8670](https://github.com/angular/material2/commit/7bc8670))
* **sidenav:** content jumping in rtl and blurry text on IE ([#12726](https://github.com/angular/material2/issues/12726)) ([4050002](https://github.com/angular/material2/commit/4050002)), closes [#10026](https://github.com/angular/material2/issues/10026)
* **sidenav:** scrollable instance not exposed when explicitly specifying content element ([#11706](https://github.com/angular/material2/issues/11706)) ([441c98e](https://github.com/angular/material2/commit/441c98e)), closes [#11517](https://github.com/angular/material2/issues/11517) [#10884](https://github.com/angular/material2/issues/10884)
* **slide-toggle:** blended ripples do not match spec ([#12735](https://github.com/angular/material2/issues/12735)) ([e148414](https://github.com/angular/material2/commit/e148414))
* **slide-toggle:** fix font sizing for slide toggle to match other input methods ([#10688](https://github.com/angular/material2/issues/10688)) ([58c1c95](https://github.com/angular/material2/commit/58c1c95))
* **slide-toggle:** invert the thumb and slide gesture in rtl ([#12284](https://github.com/angular/material2/issues/12284)) ([9a191b3](https://github.com/angular/material2/commit/9a191b3))
* **slide-toggle:** prevent error when disabling while focused ([#12325](https://github.com/angular/material2/issues/12325)) ([e273a7a](https://github.com/angular/material2/commit/e273a7a)), closes [#12323](https://github.com/angular/material2/issues/12323)
* **slide-toggle:** remove webkit tap highlight ([#12708](https://github.com/angular/material2/issues/12708)) ([ba55d04](https://github.com/angular/material2/commit/ba55d04))
* **slide-toggle:** respect primary palette of theme ([#12698](https://github.com/angular/material2/issues/12698)) ([dad0ed0](https://github.com/angular/material2/commit/dad0ed0)), closes [#11854](https://github.com/angular/material2/issues/11854)
* **slider:** thumb label blending in with background in high contrast mode ([#12606](https://github.com/angular/material2/issues/12606)) ([f1b65b6](https://github.com/angular/material2/commit/f1b65b6))
* **snack-bar:** prevent content from overriding configured aria-live message ([#12294](https://github.com/angular/material2/issues/12294)) ([0958cbb](https://github.com/angular/material2/commit/0958cbb))
* **snackbar:** wrap simple snackbar text in span ([#12599](https://github.com/angular/material2/issues/12599)) ([ef0b84b](https://github.com/angular/material2/commit/ef0b84b))
* **stepper:** focus lost if focus is inside stepper while changing step ([#12761](https://github.com/angular/material2/issues/12761)) ([8a7ca7f](https://github.com/angular/material2/commit/8a7ca7f))
* **stepper:** handle removing a step before the current one ([#11813](https://github.com/angular/material2/issues/11813)) ([82b35d0](https://github.com/angular/material2/commit/82b35d0)), closes [#11791](https://github.com/angular/material2/issues/11791)
* **stepper:** improved alignment for step icons ([#12703](https://github.com/angular/material2/issues/12703)) ([37a7056](https://github.com/angular/material2/commit/37a7056)), closes [#12696](https://github.com/angular/material2/issues/12696)
* **tab-group:** focus change event not firing for keyboard navigation ([#12192](https://github.com/angular/material2/issues/12192)) ([1b7b8ab](https://github.com/angular/material2/commit/1b7b8ab))
* **table:** error if row definition is on an ng-container ([#12462](https://github.com/angular/material2/issues/12462)) ([ef57919](https://github.com/angular/material2/commit/ef57919)), closes [#12460](https://github.com/angular/material2/issues/12460)
* **table:** errors when rendering table with sticky elements on the server ([#12095](https://github.com/angular/material2/issues/12095)) ([7e67fe9](https://github.com/angular/material2/commit/7e67fe9)), closes [#12094](https://github.com/angular/material2/issues/12094)
* **table:** extra elements throwing off table alignment ([#12645](https://github.com/angular/material2/issues/12645)) ([3b70d20](https://github.com/angular/material2/commit/3b70d20)), closes [#11165](https://github.com/angular/material2/issues/11165)
* **table:** unable to sort large numbers in strings ([#12052](https://github.com/angular/material2/issues/12052)) ([adda21f](https://github.com/angular/material2/commit/adda21f))
* **tabs:** animation running after initialization ([#12549](https://github.com/angular/material2/issues/12549)) ([4c2f619](https://github.com/angular/material2/commit/4c2f619))
* **tabs:** changed after checked error when using isActive in view ([#12206](https://github.com/angular/material2/issues/12206)) ([499458c](https://github.com/angular/material2/commit/499458c)), closes [#12197](https://github.com/angular/material2/issues/12197)
* **tabs:** content animation in RTL not working (chrome) ([#12215](https://github.com/angular/material2/issues/12215)) ([c6c68a6](https://github.com/angular/material2/commit/c6c68a6))
* **tabs:** disable focus overlay for touch focus ([#12249](https://github.com/angular/material2/issues/12249)) ([1b19b93](https://github.com/angular/material2/commit/1b19b93)), closes [#12247](https://github.com/angular/material2/issues/12247)
* **tabs:** enable keyboard wrapping and mark disabled tabs ([#12218](https://github.com/angular/material2/issues/12218)) ([7f8fd9f](https://github.com/angular/material2/commit/7f8fd9f))
* **tabs:** only target direct descendants with mat-stretch-tabs ([#12198](https://github.com/angular/material2/issues/12198)) ([592af48](https://github.com/angular/material2/commit/592af48)), closes [#12196](https://github.com/angular/material2/issues/12196)
* **tabs:** reposition tab body on direction change ([#12229](https://github.com/angular/material2/issues/12229)) ([49ec9ca](https://github.com/angular/material2/commit/49ec9ca))
* **tabs:** ripple overflow in internet explorer ([#12036](https://github.com/angular/material2/issues/12036)) ([f35a314](https://github.com/angular/material2/commit/f35a314))
* **tabs:** selectedIndex being overwritten if tabs are being added / removed ([#12245](https://github.com/angular/material2/issues/12245)) ([569c221](https://github.com/angular/material2/commit/569c221))
* **tooltip:** interfering with native drag&drop ([#12200](https://github.com/angular/material2/issues/12200)) ([19f64ad](https://github.com/angular/material2/commit/19f64ad))
* **tooltip:** opening after click on android ([#12250](https://github.com/angular/material2/issues/12250)) ([2a49532](https://github.com/angular/material2/commit/2a49532)), closes [#12223](https://github.com/angular/material2/issues/12223)
* **tree:** include constructors on MatTree classes to allow es6 builds ([#12556](https://github.com/angular/material2/issues/12556)) ([5623c5b](https://github.com/angular/material2/commit/5623c5b))
* ensure components work with ES2015 in jit mode. ([#12759](https://github.com/angular/material2/issues/12759)) ([2adced1](https://github.com/angular/material2/commit/2adced1)), closes [/github.com/angular/angular/pull/22356#issuecomment-387756794](https://github.com//github.com/angular/angular/pull/22356/issues/issuecomment-387756794) [#9329](https://github.com/angular/material2/issues/9329)
* explictly declare types for mixin base classes ([#12876](https://github.com/angular/material2/issues/12876)) ([515912b](https://github.com/angular/material2/commit/515912b))


### Features

* **autocomplete:** add updatePosition() method to MatAutocompleteTrigger ([#11495](https://github.com/angular/material2/issues/11495)) ([3ce5b1f](https://github.com/angular/material2/commit/3ce5b1f))
* **autocomplete:** align with 2018 material design ([#12570](https://github.com/angular/material2/issues/12570)) ([b9651df](https://github.com/angular/material2/commit/b9651df))
* **bottom-sheet:** align with 2018 material design spec ([#12625](https://github.com/angular/material2/issues/12625)) ([ceb2051](https://github.com/angular/material2/commit/ceb2051))
* **bottom-sheet:** allow autofocusing to be disabled ([#12193](https://github.com/angular/material2/issues/12193)) ([d6ca3ec](https://github.com/angular/material2/commit/d6ca3ec))
* **breakpoint-observer:** Emit matching state of each query provided ([#12506](https://github.com/angular/material2/issues/12506)) ([5a560b2](https://github.com/angular/material2/commit/5a560b2))
* **cdk-scrollable:** add methods to normalize scrolling in RTL ([#12607](https://github.com/angular/material2/issues/12607)) ([028746a](https://github.com/angular/material2/commit/028746a))
* **chips:** allow set in separatorKeyCodes ([#12477](https://github.com/angular/material2/issues/12477)) ([170665a](https://github.com/angular/material2/commit/170665a))
* **datepicker:** align with 2018 material design spec ([#12693](https://github.com/angular/material2/issues/12693)) ([32456e3](https://github.com/angular/material2/commit/32456e3))
* **dialog:** allow focus restoration to be disabled ([#12519](https://github.com/angular/material2/issues/12519)) ([d5c5f31](https://github.com/angular/material2/commit/d5c5f31))
* **drag-drop:** new feature! Too many commits to list.
* **expansion:** add animation events for expansion panels ([#12412](https://github.com/angular/material2/issues/12412)) ([f6b1002](https://github.com/angular/material2/commit/f6b1002))
* **expansion-panel:** align with 2018 material design spec ([#12670](https://github.com/angular/material2/issues/12670)) ([ccbae0b](https://github.com/angular/material2/commit/ccbae0b))
* **focus-monitor:** support monitoring ElementRef ([#12712](https://github.com/angular/material2/issues/12712)) ([932211e](https://github.com/angular/material2/commit/932211e))
* **form-field:** support native select element ([#12707](https://github.com/angular/material2/issues/12707)) ([4e41985](https://github.com/angular/material2/commit/4e41985))
* **ng-add:** respect project default inlineStyle, inlineTemplate and spec option value ([#12888](https://github.com/angular/material2/issues/12888)) ([8831a7a](https://github.com/angular/material2/commit/8831a7a)), closes [#11874](https://github.com/angular/material2/issues/11874)
* **ng-add:** respect project default style extension ([#12618](https://github.com/angular/material2/issues/12618)) ([5144aa7](https://github.com/angular/material2/commit/5144aa7))
* **ng-add:** set up gestures in CLI projects ([#12734](https://github.com/angular/material2/issues/12734)) ([b919a48](https://github.com/angular/material2/commit/b919a48))
* **overlay:** add the ability to set a panelClass based on the current connected position ([#12631](https://github.com/angular/material2/issues/12631)) ([765990e](https://github.com/angular/material2/commit/765990e))
* **overlay:** support setting panelClass on cdkConnectedOverlay ([#12380](https://github.com/angular/material2/issues/12380)) ([d7c734c](https://github.com/angular/material2/commit/d7c734c))
* **paginator:** allow form field color to be customized ([#12834](https://github.com/angular/material2/issues/12834)) ([e18a99f](https://github.com/angular/material2/commit/e18a99f))
* **portal:** allow for custom ComponentFactoryResolver to be associated with portal ([#12677](https://github.com/angular/material2/issues/12677)) ([136f5dd](https://github.com/angular/material2/commit/136f5dd)), closes [#9712](https://github.com/angular/material2/issues/9712)
* **progress-bar:** add transitionend output for value animation ([#12409](https://github.com/angular/material2/issues/12409)) ([6a1a707](https://github.com/angular/material2/commit/6a1a707))
* **progress-bar:** align with 2018 material design spec ([#12394](https://github.com/angular/material2/issues/12394)) ([b2247f8](https://github.com/angular/material2/commit/b2247f8))
* **radio:** align with 2018 material design spec ([#12299](https://github.com/angular/material2/issues/12299)) ([dda8122](https://github.com/angular/material2/commit/dda8122))
* **ripple:** no longer require additional setup when using MatRipple directive ([#11913](https://github.com/angular/material2/issues/11913)) ([d796776](https://github.com/angular/material2/commit/d796776))
* **ripple:** support multi-touch ([#12643](https://github.com/angular/material2/issues/12643)) ([8fdc2cf](https://github.com/angular/material2/commit/8fdc2cf))
* **schematics:** new tree schematic ([#11739](https://github.com/angular/material2/issues/11739)) ([1540e2f](https://github.com/angular/material2/commit/1540e2f))
* **select:** allow for option sorting logic to be customized ([#11890](https://github.com/angular/material2/issues/11890)) ([d54a75a](https://github.com/angular/material2/commit/d54a75a))
* **sidenav:** align with 2018 material design spec ([#12569](https://github.com/angular/material2/issues/12569)) ([1f88bd7](https://github.com/angular/material2/commit/1f88bd7))
* **slide-toggle:** align with 2018 material design spec ([#12419](https://github.com/angular/material2/issues/12419)) ([5f2e077](https://github.com/angular/material2/commit/5f2e077))
* **snack-bar:** align with 2018 material design spec ([#12634](https://github.com/angular/material2/issues/12634)) ([1e754a0](https://github.com/angular/material2/commit/1e754a0))
* **tooltip:** align with 2018 material design spec ([#12310](https://github.com/angular/material2/issues/12310)) ([4e358c3](https://github.com/angular/material2/commit/4e358c3))
* **virtual-scroll:** new feature! Too many commits to list.


### Performance Improvements

* **overlay:** remove detached overlays from the DOM ([#12414](https://github.com/angular/material2/issues/12414)) ([71886f8](https://github.com/angular/material2/commit/71886f8)), closes [#12341](https://github.com/angular/material2/issues/12341)
* **table:** leaking reference through mostRecentCellOutlet ([#12269](https://github.com/angular/material2/issues/12269)) ([34a7e38](https://github.com/angular/material2/commit/34a7e38)), closes [#12259](https://github.com/angular/material2/issues/12259)
* **tree:** leaking reference through mostRecentTreeNode ([#12334](https://github.com/angular/material2/issues/12334)) ([60b9928](https://github.com/angular/material2/commit/60b9928)), closes [#12269](https://github.com/angular/material2/issues/12269)
* **virtual-scroll:** improve scrolling performance ([#12490](https://github.com/angular/material2/issues/12490)) ([4a9fe87](https://github.com/angular/material2/commit/4a9fe87))


### BREAKING CHANGES

* **sidenav:** the constructor signature of the `MatDrawerContent` and `MatSidenavContent` has changed.

# Changes Prior to 7.0.0

To view changes that occurred prior to 7.0.0, see [CHANGELOG_ARCHIVE.md](https://github.com/angular/components/blob/master/CHANGELOG_ARCHIVE.md).
