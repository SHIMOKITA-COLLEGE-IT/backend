import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MySkillsCreateWithoutProfileInput } from './my-skills-create-without-profile.input';
import { Type } from 'class-transformer';
import { MySkillsCreateOrConnectWithoutProfileInput } from './my-skills-create-or-connect-without-profile.input';
import { MySkillsCreateManyProfileInputEnvelope } from './my-skills-create-many-profile-input-envelope.input';
import { MySkillsWhereUniqueInput } from './my-skills-where-unique.input';

@InputType()
export class MySkillsCreateNestedManyWithoutProfileInput {

    @Field(() => [MySkillsCreateWithoutProfileInput], {nullable:true})
    @Type(() => MySkillsCreateWithoutProfileInput)
    create?: Array<MySkillsCreateWithoutProfileInput>;

    @Field(() => [MySkillsCreateOrConnectWithoutProfileInput], {nullable:true})
    @Type(() => MySkillsCreateOrConnectWithoutProfileInput)
    connectOrCreate?: Array<MySkillsCreateOrConnectWithoutProfileInput>;

    @Field(() => MySkillsCreateManyProfileInputEnvelope, {nullable:true})
    @Type(() => MySkillsCreateManyProfileInputEnvelope)
    createMany?: MySkillsCreateManyProfileInputEnvelope;

    @Field(() => [MySkillsWhereUniqueInput], {nullable:true})
    @Type(() => MySkillsWhereUniqueInput)
    connect?: Array<MySkillsWhereUniqueInput>;
}
