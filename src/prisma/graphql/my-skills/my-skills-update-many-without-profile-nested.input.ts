import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MySkillsCreateWithoutProfileInput } from './my-skills-create-without-profile.input';
import { Type } from 'class-transformer';
import { MySkillsCreateOrConnectWithoutProfileInput } from './my-skills-create-or-connect-without-profile.input';
import { MySkillsUpsertWithWhereUniqueWithoutProfileInput } from './my-skills-upsert-with-where-unique-without-profile.input';
import { MySkillsCreateManyProfileInputEnvelope } from './my-skills-create-many-profile-input-envelope.input';
import { MySkillsWhereUniqueInput } from './my-skills-where-unique.input';
import { MySkillsUpdateWithWhereUniqueWithoutProfileInput } from './my-skills-update-with-where-unique-without-profile.input';
import { MySkillsUpdateManyWithWhereWithoutProfileInput } from './my-skills-update-many-with-where-without-profile.input';
import { MySkillsScalarWhereInput } from './my-skills-scalar-where.input';

@InputType()
export class MySkillsUpdateManyWithoutProfileNestedInput {

    @Field(() => [MySkillsCreateWithoutProfileInput], {nullable:true})
    @Type(() => MySkillsCreateWithoutProfileInput)
    create?: Array<MySkillsCreateWithoutProfileInput>;

    @Field(() => [MySkillsCreateOrConnectWithoutProfileInput], {nullable:true})
    @Type(() => MySkillsCreateOrConnectWithoutProfileInput)
    connectOrCreate?: Array<MySkillsCreateOrConnectWithoutProfileInput>;

    @Field(() => [MySkillsUpsertWithWhereUniqueWithoutProfileInput], {nullable:true})
    @Type(() => MySkillsUpsertWithWhereUniqueWithoutProfileInput)
    upsert?: Array<MySkillsUpsertWithWhereUniqueWithoutProfileInput>;

    @Field(() => MySkillsCreateManyProfileInputEnvelope, {nullable:true})
    @Type(() => MySkillsCreateManyProfileInputEnvelope)
    createMany?: MySkillsCreateManyProfileInputEnvelope;

    @Field(() => [MySkillsWhereUniqueInput], {nullable:true})
    @Type(() => MySkillsWhereUniqueInput)
    set?: Array<MySkillsWhereUniqueInput>;

    @Field(() => [MySkillsWhereUniqueInput], {nullable:true})
    @Type(() => MySkillsWhereUniqueInput)
    disconnect?: Array<MySkillsWhereUniqueInput>;

    @Field(() => [MySkillsWhereUniqueInput], {nullable:true})
    @Type(() => MySkillsWhereUniqueInput)
    delete?: Array<MySkillsWhereUniqueInput>;

    @Field(() => [MySkillsWhereUniqueInput], {nullable:true})
    @Type(() => MySkillsWhereUniqueInput)
    connect?: Array<MySkillsWhereUniqueInput>;

    @Field(() => [MySkillsUpdateWithWhereUniqueWithoutProfileInput], {nullable:true})
    @Type(() => MySkillsUpdateWithWhereUniqueWithoutProfileInput)
    update?: Array<MySkillsUpdateWithWhereUniqueWithoutProfileInput>;

    @Field(() => [MySkillsUpdateManyWithWhereWithoutProfileInput], {nullable:true})
    @Type(() => MySkillsUpdateManyWithWhereWithoutProfileInput)
    updateMany?: Array<MySkillsUpdateManyWithWhereWithoutProfileInput>;

    @Field(() => [MySkillsScalarWhereInput], {nullable:true})
    @Type(() => MySkillsScalarWhereInput)
    deleteMany?: Array<MySkillsScalarWhereInput>;
}
